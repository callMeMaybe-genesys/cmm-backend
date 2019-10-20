'use strict'

let endpoint = 'https://api.genesysappliedresearch.com/v2/knowledge';
let orgId = '257df991-209b-406a-b5ce-6ae1e2ee4b33';
let secretKey = '84c75548-597a-4ac8-ac08-b9bf2143e2a6';
let token;
let languageCode = 'en-US';
let kbId = '618f54f6-36f5-4bf8-9ab6-495418af41ed';
let categoryId;
let documentId;
let trainingId;

let c = {
    endpoint,
    orgId,
    secretKey,
    token,
    languageCode,
    kbId,
    categoryId,
    documentId,
    trainingId,
};

module.exports = c;