const { constants } = require('./constants/DE');
module.exports.getControle1 = function (event) {
    const dataValuesC1 = event.dataValues.filter(dv => dv.dataElement === constants.C1_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C1_AUTRE_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C1_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C1_ID_SPECIMEN ||
        dv.dataElement === constants.C1_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C1_RESULTAT_LABORATOIRE ||
        dv.dataElement === constants.C1_DATE_EXAMEN_DE ||
        dv.dataElement === constants.C1_N_GENE_FAM ||
        dv.dataElement === constants.C1_MOYENNE_N_ORF1AB ||
        dv.dataElement === constants.C1_ORF1AB_VIC ||
        dv.dataElement === constants.C1_CTL_INTERNE_CY5);

    const newDataValues = [];
    dataValuesC1.forEach((C1) => {
        switch (C1.dataElement) {
            case constants.C1_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C1, dataElement: constants.C0_SITE_DE_PRELEVEMENT });
                break;
            case constants.C1_AUTRE_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C1, dataElement: constants.C0_AUTRE_SITE_DE_PRELEVEMENT });
                break;
            case constants.C1_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C1, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C1_ID_SPECIMEN:
                newDataValues.push({ ...C1, dataElement: constants.C0_ID_SPECIMEN });
                break;
            case constants.C1_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C1, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C1_RESULTAT_LABORATOIRE:
                newDataValues.push({ ...C1, dataElement: constants.C0_RESULTAT_LABORATOIRE });
                break;
            case constants.C1_DATE_EXAMEN_DE:
                newDataValues.push({ ...C1, dataElement: constants.C0_DATE_RESULTAT });
                break;
            case constants.C1_N_GENE_FAM:
                newDataValues.push({ ...C1, dataElement: constants.C0_N_GENE_FAM });
                break;
            case constants.C1_MOYENNE_N_ORF1AB:
                newDataValues.push({ ...C1, dataElement: constants.C0_MOYENNE_N_ORF1AB });
                break;

            case constants.C1_ORF1AB_VIC:
                newDataValues.push({ ...C1, dataElement: constants.C0_ORF1AB_VIC });
                break;
            case constants.C1_CTL_INTERNE_CY5:
                newDataValues.push({ ...C1, dataElement: constants.C0_CTL_INTERNE_CY5 });
                break;
            default:
                break;
        }
    });
    let newEvent;
    if (newDataValues.length > 0) {
        newDataValues.push({
            "lastUpdated": newDataValues[0].lastUpdated,
            "storedBy": newDataValues[0].storedBy,
            "created": newDataValues[0].created,
            "dataElement": "S7Ev6tfxazN",
            "value": "1",
            "providedElsewhere": false
        })

        newEvent = { ...event, dataValues: newDataValues, programStage: constants.PROGRAM_STAGE_ECONTROL, eventDate: newDataValues[0].created };
        delete newEvent.href;
        delete newEvent.event;
    }
    return newEvent;
}
module.exports.getControle2 = function (event) {
    const dataValuesC2 = event.dataValues.filter(dv => dv.dataElement === constants.C2_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C2_AUTRE_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C2_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C2_ID_SPECIMEN ||
        dv.dataElement === constants.C2_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C2_RESULTAT_LABORATOIRE ||
        dv.dataElement === constants.C2_DATE_EXAMEN_DE ||
        dv.dataElement === constants.C2_N_GENE_FAM ||
        dv.dataElement === constants.C2_MOYENNE_N_ORF1AB ||
        dv.dataElement === constants.C2_ORF1AB_VIC ||
        dv.dataElement === constants.C2_CTL_INTERNE_CY5);

    const newDataValues = [];
    dataValuesC2.forEach((C2) => {
        switch (C2.dataElement) {
            case constants.C2_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C2, dataElement: constants.C0_SITE_DE_PRELEVEMENT });
                break;
            case constants.C2_AUTRE_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C2, dataElement: constants.C0_AUTRE_SITE_DE_PRELEVEMENT });
                break;
            case constants.C2_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C2, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C2_ID_SPECIMEN:
                newDataValues.push({ ...C2, dataElement: constants.C0_ID_SPECIMEN });
                break;
            case constants.C2_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C2, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C2_RESULTAT_LABORATOIRE:
                newDataValues.push({ ...C2, dataElement: constants.C0_RESULTAT_LABORATOIRE });
                break;
            case constants.C2_DATE_EXAMEN_DE:
                newDataValues.push({ ...C2, dataElement: constants.C0_DATE_RESULTAT });
                break;
            case constants.C2_N_GENE_FAM:
                newDataValues.push({ ...C2, dataElement: constants.C0_N_GENE_FAM });
                break;
            case constants.C2_MOYENNE_N_ORF1AB:
                newDataValues.push({ ...C2, dataElement: constants.C0_MOYENNE_N_ORF1AB });
                break;

            case constants.C2_ORF1AB_VIC:
                newDataValues.push({ ...C2, dataElement: constants.C0_ORF1AB_VIC });
                break;
            case constants.C2_CTL_INTERNE_CY5:
                newDataValues.push({ ...C2, dataElement: constants.C0_CTL_INTERNE_CY5 });
                break;
            default:
                break;
        }
    });
    let newEvent;
    if (newDataValues.length > 0) {
        newDataValues.push({
            "lastUpdated": newDataValues[0].lastUpdated,
            "storedBy": newDataValues[0].storedBy,
            "created": newDataValues[0].created,
            "dataElement": "S7Ev6tfxazN",
            "value": "2",
            "providedElsewhere": false
        })

        newEvent = { ...event, dataValues: newDataValues, programStage: constants.PROGRAM_STAGE_ECONTROL, eventDate: newDataValues[0].created };
        delete newEvent.href;
        delete newEvent.event;
    }
    return newEvent;
}
module.exports.getControle3 = function (event) {
    const dataValuesC3 = event.dataValues.filter(dv => dv.dataElement === constants.C3_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C3_AUTRE_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C3_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C3_ID_SPECIMEN ||
        dv.dataElement === constants.C3_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C3_RESULTAT_LABORATOIRE ||
        dv.dataElement === constants.C3_DATE_EXAMEN_DE ||
        dv.dataElement === constants.C3_N_GENE_FAM ||
        dv.dataElement === constants.C3_MOYENNE_N_ORF1AB ||
        dv.dataElement === constants.C3_ORF1AB_VIC ||
        dv.dataElement === constants.C3_CTL_INTERNE_CY5);

    const newDataValues = [];
    dataValuesC3.forEach((C3) => {
        switch (C3.dataElement) {
            case constants.C3_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C3, dataElement: constants.C0_SITE_DE_PRELEVEMENT });
                break;
            case constants.C3_AUTRE_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C3, dataElement: constants.C0_AUTRE_SITE_DE_PRELEVEMENT });
                break;
            case constants.C3_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C3, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C3_ID_SPECIMEN:
                newDataValues.push({ ...C3, dataElement: constants.C0_ID_SPECIMEN });
                break;
            case constants.C3_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C3, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C3_RESULTAT_LABORATOIRE:
                newDataValues.push({ ...C3, dataElement: constants.C0_RESULTAT_LABORATOIRE });
                break;
            case constants.C3_DATE_EXAMEN_DE:
                newDataValues.push({ ...C3, dataElement: constants.C0_DATE_RESULTAT });
                break;
            case constants.C3_N_GENE_FAM:
                newDataValues.push({ ...C3, dataElement: constants.C0_N_GENE_FAM });
                break;
            case constants.C3_MOYENNE_N_ORF1AB:
                newDataValues.push({ ...C3, dataElement: constants.C0_MOYENNE_N_ORF1AB });
                break;

            case constants.C3_ORF1AB_VIC:
                newDataValues.push({ ...C3, dataElement: constants.C0_ORF1AB_VIC });
                break;
            case constants.C3_CTL_INTERNE_CY5:
                newDataValues.push({ ...C3, dataElement: constants.C0_CTL_INTERNE_CY5 });
                break;
            default:
                break;
        }
    });
    let newEvent;
    if (newDataValues.length > 0) {
        newDataValues.push({
            "lastUpdated": newDataValues[0].lastUpdated,
            "storedBy": newDataValues[0].storedBy,
            "created": newDataValues[0].created,
            "dataElement": "S7Ev6tfxazN",
            "value": "3",
            "providedElsewhere": false
        })

        newEvent = { ...event, dataValues: newDataValues, programStage: constants.PROGRAM_STAGE_ECONTROL, eventDate: newDataValues[0].created };
        delete newEvent.href;
        delete newEvent.event;
    }
    return newEvent;
}
module.exports.getControle4 = function (event) {
    const dataValuesC4 = event.dataValues.filter(dv => dv.dataElement === constants.C4_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C4_AUTRE_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C4_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C4_ID_SPECIMEN ||
        dv.dataElement === constants.C4_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C4_RESULTAT_LABORATOIRE ||
        dv.dataElement === constants.C4_DATE_EXAMEN_DE ||
        dv.dataElement === constants.C4_N_GENE_FAM ||
        dv.dataElement === constants.C4_MOYENNE_N_ORF1AB ||
        dv.dataElement === constants.C4_ORF1AB_VIC ||
        dv.dataElement === constants.C4_CTL_INTERNE_CY5);

    const newDataValues = [];
    dataValuesC4.forEach((C4) => {
        switch (C4.dataElement) {
            case constants.C4_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C4, dataElement: constants.C0_SITE_DE_PRELEVEMENT });
                break;
            case constants.C4_AUTRE_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C4, dataElement: constants.C0_AUTRE_SITE_DE_PRELEVEMENT });
                break;
            case constants.C4_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C4, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C4_ID_SPECIMEN:
                newDataValues.push({ ...C4, dataElement: constants.C0_ID_SPECIMEN });
                break;
            case constants.C4_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C4, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C4_RESULTAT_LABORATOIRE:
                newDataValues.push({ ...C4, dataElement: constants.C0_RESULTAT_LABORATOIRE });
                break;
            case constants.C4_DATE_EXAMEN_DE:
                newDataValues.push({ ...C4, dataElement: constants.C0_DATE_RESULTAT });
                break;
            case constants.C4_N_GENE_FAM:
                newDataValues.push({ ...C4, dataElement: constants.C0_N_GENE_FAM });
                break;
            case constants.C4_MOYENNE_N_ORF1AB:
                newDataValues.push({ ...C4, dataElement: constants.C0_MOYENNE_N_ORF1AB });
                break;

            case constants.C4_ORF1AB_VIC:
                newDataValues.push({ ...C4, dataElement: constants.C0_ORF1AB_VIC });
                break;
            case constants.C4_CTL_INTERNE_CY5:
                newDataValues.push({ ...C4, dataElement: constants.C0_CTL_INTERNE_CY5 });
                break;
            default:
                break;
        }
    });
    let newEvent;
    if (newDataValues.length > 0) {
        newDataValues.push({
            "lastUpdated": newDataValues[0].lastUpdated,
            "storedBy": newDataValues[0].storedBy,
            "created": newDataValues[0].created,
            "dataElement": "S7Ev6tfxazN",
            "value": "4",
            "providedElsewhere": false
        })

        newEvent = { ...event, dataValues: newDataValues, programStage: constants.PROGRAM_STAGE_ECONTROL, eventDate: newDataValues[0].created };
        delete newEvent.href;
        delete newEvent.event;
    }
    return newEvent;
}
module.exports.getControle5 = function (event) {
    const dataValuesC5 = event.dataValues.filter(dv => dv.dataElement === constants.C5_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C5_AUTRE_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C5_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C5_ID_SPECIMEN ||
        dv.dataElement === constants.C5_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C5_RESULTAT_LABORATOIRE ||
        dv.dataElement === constants.C5_DATE_EXAMEN_DE ||
        dv.dataElement === constants.C5_N_GENE_FAM ||
        dv.dataElement === constants.C5_MOYENNE_N_ORF1AB ||
        dv.dataElement === constants.C5_ORF1AB_VIC ||
        dv.dataElement === constants.C5_CTL_INTERNE_CY5);

    const newDataValues = [];
    dataValuesC5.forEach((C5) => {
        switch (C5.dataElement) {
            case constants.C5_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C5, dataElement: constants.C0_SITE_DE_PRELEVEMENT });
                break;
            case constants.C5_AUTRE_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C5, dataElement: constants.C0_AUTRE_SITE_DE_PRELEVEMENT });
                break;
            case constants.C5_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C5, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C5_ID_SPECIMEN:
                newDataValues.push({ ...C5, dataElement: constants.C0_ID_SPECIMEN });
                break;
            case constants.C5_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C5, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C5_RESULTAT_LABORATOIRE:
                newDataValues.push({ ...C5, dataElement: constants.C0_RESULTAT_LABORATOIRE });
                break;
            case constants.C5_DATE_EXAMEN_DE:
                newDataValues.push({ ...C5, dataElement: constants.C0_DATE_RESULTAT });
                break;
            case constants.C5_N_GENE_FAM:
                newDataValues.push({ ...C5, dataElement: constants.C0_N_GENE_FAM });
                break;
            case constants.C5_MOYENNE_N_ORF1AB:
                newDataValues.push({ ...C5, dataElement: constants.C0_MOYENNE_N_ORF1AB });
                break;

            case constants.C5_ORF1AB_VIC:
                newDataValues.push({ ...C5, dataElement: constants.C0_ORF1AB_VIC });
                break;
            case constants.C5_CTL_INTERNE_CY5:
                newDataValues.push({ ...C5, dataElement: constants.C0_CTL_INTERNE_CY5 });
                break;
            default:
                break;
        }
    });
    let newEvent;
    if (newDataValues.length > 0) {
        newDataValues.push({
            "lastUpdated": newDataValues[0].lastUpdated,
            "storedBy": newDataValues[0].storedBy,
            "created": newDataValues[0].created,
            "dataElement": "S7Ev6tfxazN",
            "value": "5",
            "providedElsewhere": false
        })

        newEvent = { ...event, dataValues: newDataValues, programStage: constants.PROGRAM_STAGE_ECONTROL, eventDate: newDataValues[0].created };
        delete newEvent.href;
        delete newEvent.event;
    }
    return newEvent;
}
module.exports.getControle6 = function (event) {
    const dataValuesC6 = event.dataValues.filter(dv => dv.dataElement === constants.C6_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C6_AUTRE_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C6_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C6_ID_SPECIMEN ||
        dv.dataElement === constants.C6_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C6_RESULTAT_LABORATOIRE ||
        dv.dataElement === constants.C6_DATE_EXAMEN_DE ||
        dv.dataElement === constants.C6_N_GENE_FAM ||
        dv.dataElement === constants.C6_MOYENNE_N_ORF1AB ||
        dv.dataElement === constants.C6_ORF1AB_VIC ||
        dv.dataElement === constants.C6_CTL_INTERNE_CY5);

    const newDataValues = [];
    dataValuesC6.forEach((C6) => {
        switch (C6.dataElement) {
            case constants.C6_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C6, dataElement: constants.C0_SITE_DE_PRELEVEMENT });
                break;
            case constants.C6_AUTRE_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C6, dataElement: constants.C0_AUTRE_SITE_DE_PRELEVEMENT });
                break;
            case constants.C6_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C6, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C6_ID_SPECIMEN:
                newDataValues.push({ ...C6, dataElement: constants.C0_ID_SPECIMEN });
                break;
            case constants.C6_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C6, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C6_RESULTAT_LABORATOIRE:
                newDataValues.push({ ...C6, dataElement: constants.C0_RESULTAT_LABORATOIRE });
                break;
            case constants.C6_DATE_EXAMEN_DE:
                newDataValues.push({ ...C6, dataElement: constants.C0_DATE_RESULTAT });
                break;
            case constants.C6_N_GENE_FAM:
                newDataValues.push({ ...C6, dataElement: constants.C0_N_GENE_FAM });
                break;
            case constants.C6_MOYENNE_N_ORF1AB:
                newDataValues.push({ ...C6, dataElement: constants.C0_MOYENNE_N_ORF1AB });
                break;

            case constants.C6_ORF1AB_VIC:
                newDataValues.push({ ...C6, dataElement: constants.C0_ORF1AB_VIC });
                break;
            case constants.C6_CTL_INTERNE_CY5:
                newDataValues.push({ ...C6, dataElement: constants.C0_CTL_INTERNE_CY5 });
                break;
            default:
                break;
        }
    });
    let newEvent;
    if (newDataValues.length > 0) {
        newDataValues.push({
            "lastUpdated": newDataValues[0].lastUpdated,
            "storedBy": newDataValues[0].storedBy,
            "created": newDataValues[0].created,
            "dataElement": "S7Ev6tfxazN",
            "value": "6",
            "providedElsewhere": false
        })

        newEvent = { ...event, dataValues: newDataValues, programStage: constants.PROGRAM_STAGE_ECONTROL, eventDate: newDataValues[0].created };
        delete newEvent.href;
        delete newEvent.event;
    }
    return newEvent;
}
module.exports.getControle7 = function (event) {
    const dataValuesC7 = event.dataValues.filter(dv => dv.dataElement === constants.C7_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C7_AUTRE_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C7_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C7_ID_SPECIMEN ||
        dv.dataElement === constants.C7_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C7_RESULTAT_LABORATOIRE ||
        dv.dataElement === constants.C7_DATE_EXAMEN_DE ||
        dv.dataElement === constants.C7_N_GENE_FAM ||
        dv.dataElement === constants.C7_MOYENNE_N_ORF1AB ||
        dv.dataElement === constants.C7_ORF1AB_VIC ||
        dv.dataElement === constants.C7_CTL_INTERNE_CY5);

    const newDataValues = [];
    dataValuesC7.forEach((C7) => {
        switch (C7.dataElement) {
            case constants.C7_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C7, dataElement: constants.C0_SITE_DE_PRELEVEMENT });
                break;
            case constants.C7_AUTRE_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C7, dataElement: constants.C0_AUTRE_SITE_DE_PRELEVEMENT });
                break;
            case constants.C7_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C7, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C7_ID_SPECIMEN:
                newDataValues.push({ ...C7, dataElement: constants.C0_ID_SPECIMEN });
                break;
            case constants.C7_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C7, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C7_RESULTAT_LABORATOIRE:
                newDataValues.push({ ...C7, dataElement: constants.C0_RESULTAT_LABORATOIRE });
                break;
            case constants.C7_DATE_EXAMEN_DE:
                newDataValues.push({ ...C7, dataElement: constants.C0_DATE_RESULTAT });
                break;
            case constants.C7_N_GENE_FAM:
                newDataValues.push({ ...C7, dataElement: constants.C0_N_GENE_FAM });
                break;
            case constants.C7_MOYENNE_N_ORF1AB:
                newDataValues.push({ ...C7, dataElement: constants.C0_MOYENNE_N_ORF1AB });
                break;

            case constants.C7_ORF1AB_VIC:
                newDataValues.push({ ...C7, dataElement: constants.C0_ORF1AB_VIC });
                break;
            case constants.C7_CTL_INTERNE_CY5:
                newDataValues.push({ ...C7, dataElement: constants.C0_CTL_INTERNE_CY5 });
                break;
            default:
                break;
        }
    });
    let newEvent;
    if (newDataValues.length > 0) {
        newDataValues.push({
            "lastUpdated": newDataValues[0].lastUpdated,
            "storedBy": newDataValues[0].storedBy,
            "created": newDataValues[0].created,
            "dataElement": "S7Ev6tfxazN",
            "value": "7",
            "providedElsewhere": false
        })

        newEvent = { ...event, dataValues: newDataValues, programStage: constants.PROGRAM_STAGE_ECONTROL, eventDate: newDataValues[0].created };
        delete newEvent.href;
        delete newEvent.event;
    }
    return newEvent;
}
module.exports.getControle8 = function (event) {
    const dataValuesC8 = event.dataValues.filter(dv => dv.dataElement === constants.C8_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C8_AUTRE_SITE_DE_PRELEVEMENT ||
        dv.dataElement === constants.C8_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C8_ID_SPECIMEN ||
        dv.dataElement === constants.C8_NOM_DU_LABORATOIRE_DE_REFERENCE ||
        dv.dataElement === constants.C8_RESULTAT_LABORATOIRE ||
        dv.dataElement === constants.C8_DATE_EXAMEN_DE ||
        dv.dataElement === constants.C8_N_GENE_FAM ||
        dv.dataElement === constants.C8_MOYENNE_N_ORF1AB ||
        dv.dataElement === constants.C8_ORF1AB_VIC ||
        dv.dataElement === constants.C8_CTL_INTERNE_CY5);

    const newDataValues = [];
    dataValuesC8.forEach((C8) => {
        switch (C8.dataElement) {
            case constants.C8_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C8, dataElement: constants.C0_SITE_DE_PRELEVEMENT });
                break;
            case constants.C8_AUTRE_SITE_DE_PRELEVEMENT:
                newDataValues.push({ ...C8, dataElement: constants.C0_AUTRE_SITE_DE_PRELEVEMENT });
                break;
            case constants.C8_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C8, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C8_ID_SPECIMEN:
                newDataValues.push({ ...C8, dataElement: constants.C0_ID_SPECIMEN });
                break;
            case constants.C8_NOM_DU_LABORATOIRE_DE_REFERENCE:
                newDataValues.push({ ...C8, dataElement: constants.C0_NOM_DU_LABORATOIRE_DE_REFERENCE });
                break;
            case constants.C8_RESULTAT_LABORATOIRE:
                newDataValues.push({ ...C8, dataElement: constants.C0_RESULTAT_LABORATOIRE });
                break;
            case constants.C8_DATE_EXAMEN_DE:
                newDataValues.push({ ...C8, dataElement: constants.C0_DATE_RESULTAT });
                break;
            case constants.C8_N_GENE_FAM:
                newDataValues.push({ ...C8, dataElement: constants.C0_N_GENE_FAM });
                break;
            case constants.C8_MOYENNE_N_ORF1AB:
                newDataValues.push({ ...C8, dataElement: constants.C0_MOYENNE_N_ORF1AB });
                break;

            case constants.C8_ORF1AB_VIC:
                newDataValues.push({ ...C8, dataElement: constants.C0_ORF1AB_VIC });
                break;
            case constants.C8_CTL_INTERNE_CY5:
                newDataValues.push({ ...C8, dataElement: constants.C0_CTL_INTERNE_CY5 });
                break;
            default:
                break;
        }
    });
    let newEvent;
    if (newDataValues.length > 0) {
        newDataValues.push({
            "lastUpdated": newDataValues[0].lastUpdated,
            "storedBy": newDataValues[0].storedBy,
            "created": newDataValues[0].created,
            "dataElement": "S7Ev6tfxazN",
            "value": "8",
            "providedElsewhere": false
        })

        newEvent = { ...event, dataValues: newDataValues, programStage: constants.PROGRAM_STAGE_ECONTROL, eventDate: newDataValues[0].created };
        delete newEvent.href;
        delete newEvent.event;
    }
    return newEvent;
}