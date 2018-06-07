import base from '../airtable/config';

export function destroyUser (id) {
  base('Profil').destroy(id, function (err, deletedRecord) {
    if (err) { console.error(err); return; }
      console.log('Deleted record', deletedRecord.id);
  });
}

export function getIdAirTable (id, callback) {
  base('Profil').select({
    filterByFormula: '{id} = "' + id + '"'
  })
  .eachPage(response => callback(response[0].id),
  err => {
    if (err) {
      console.error(err); return;
    }
  });
}
