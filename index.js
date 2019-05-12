const GoogleSpreadsheet = require('google-spreadsheet')
const credentials = require('./credentials.json')
const { promisify } = require('util')

const docId = '16UB_1gAq42Ssg8oWcg1Z1Bxh5L2PYm-h3dFrD0ysois'

const accessSheet = async() => {
  const doc = new GoogleSpreadsheet(docId)
  await promisify(doc.useServiceAccountAuth)(credentials)
  const info = await promisify(doc.getInfo)()
  const worksheet = info.worksheets[0]
  // getting data
  /*
  const rows = await promisify(worksheet.getRows)({
    query: 'coluna2 = "a@a.com"'
  })
  rows.forEach(row => {
    console.log(row.coluna, row.coluna2)
    row.del()
  })
  */
  // add row
  await promisify(worksheet.addRow)({ coluna: 'novo nome', coluna2: 'a@a.com' })
}
accessSheet()