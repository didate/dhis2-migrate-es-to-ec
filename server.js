const { dhis2 } = require('./dhis2');
const { constants } = require('./constants/DE');

const functions = require('./Transform');

dhis2.get(`/events.json?orgUnit=${constants.ORG_UNIT}&ouMode=DESCENDANTS&program=${constants.PROGRAM}&programStage=${constants.PROGRAM_STAGE_ESORTIE}&pageSize=200&page=1`).then(async (res) => {

    let page = 1;
    let { events } = res.data;
    try {
        while (events && events.length > 0) {
            events.forEach((event) => {
                let examens;
                examens = transform(event);

                if (examens) {
                    console.log(examens.length);
                    examens.forEach((exam) => {
                        dhis2.post('/events', JSON.stringify(exam)).then((res) => {
                            //console.log("OK");
                        }).catch((err) => {
                            console.log(console.log(err));
                        });
                    })

                }

            });
            console.log("OK");
            page = page + 1;
            const newRes = await dhis2.get(`/events.json?orgUnit=${constants.ORG_UNIT}&ouMode=DESCENDANTS&program=${constants.PROGRAM}&programStage=${constants.PROGRAM_STAGE_ESORTIE}&pageSize=200&page=${page}`);
            events = newRes.data.events;

        }
    } catch (error) {
        console.log(error);
    }

}, (err) => {
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

