const { dhis2 } = require('./dhis2');
const { constants } = require('./constants/DE');
const connectDB = require('./mongoose/db');
const functions = require('./Transform');
const programModel = require('./model/trackedEntityInstance');
const Tei = require('./model/trackedEntityInstance');
const { default: Axios } = require('axios');
connectDB();

// get events from dhis2 (first page)
dhis2.get(`/events.json?orgUnit=${constants.ORG_UNIT}&ouMode=DESCENDANTS&program=${constants.PROGRAM}&programStage=${constants.PROGRAM_STAGE_ESORTIE}&filter=${constants.TRAITE}:EQ:1&pageSize=200&page=1`).then(async (res) => {

    let page = 1;
    let { events } = res.data;
    try {
        while (events && events.length > 0) {
            events.forEach(async (event) => {

                // check if this tei was not already treated
                const teiFromDb = await Tei.findOne({ tei: event.trackedEntityInstance });

                if (!teiFromDb) {
                    let constroles = transform(event); // Transform from ES to EC events

                    if (constroles) {
                        console.log(`${constroles.length} events to create`)
                        constroles.forEach(async (constrol) => {
                            // send one control to dhis 2
                            await dhis2.post('/events', JSON.stringify(constrol));
                        })
                        // save into mongodb
                        const tei = new Tei({ tei: event.trackedEntityInstance, status: 'success' });
                        tei.save();
                        // set traited 
                        event.dataValues.filter((ev) => ev.dataElement === constants.TRAITE).forEach((e) => e.value = 2);

                        await dhis2.put(`/events/${event.event}`, JSON.stringify(event));
                    }
                } else {
                    console.log(`${teiFromDb.tei} already treated`);
                }

            });
            console.log("OK");
            page = page + 1;
            // get events from the next page
            const newRes = await dhis2.get(`/events.json?orgUnit=${constants.ORG_UNIT}&ouMode=DESCENDANTS&program=${constants.PROGRAM}&programStage=${constants.PROGRAM_STAGE_ESORTIE}&filter=${constants.TRAITE}:EQ:1&pageSize=200&page=${page}`);
            events = newRes.data.events;
        }
        console.log("End")
    } catch (error) {
        console.log(error);
    }

}, (err) => {
    console.log(err);
}).catch((err) => {
    console.log(err);
});


const transform = (event) => {
    //;
    const newEventC1 = functions.getControle1(event);
    const newEventC2 = functions.getControle2(event);
    const newEventC3 = functions.getControle3(event);
    const newEventC4 = functions.getControle4(event);
    const newEventC5 = functions.getControle5(event);
    const newEventC6 = functions.getControle6(event);
    const newEventC7 = functions.getControle7(event);
    const newEventC8 = functions.getControle8(event);
    const all = [];
    if (newEventC1) {
        all.push(newEventC1);
    }
    if (newEventC2) {
        all.push(newEventC2);
    }
    if (newEventC3) {
        all.push(newEventC3);
    }
    if (newEventC4) {
        all.push(newEventC4);
    }
    if (newEventC5) {
        all.push(newEventC5);
    }
    if (newEventC6) {
        all.push(newEventC6);
    }
    if (newEventC7) {
        all.push(newEventC7);
    }
    if (newEventC8) {
        all.push(newEventC8);
    }
    return all.length > 0 ? all : null;
}

