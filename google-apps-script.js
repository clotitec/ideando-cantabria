/**
 * Google Apps Script - doPost handler para Ideando Cantabria
 *
 * INSTRUCCIONES DE INSTALACIÓN:
 * 1. Ve a https://script.google.com y crea un nuevo proyecto
 * 2. Pega este código en el editor
 * 3. Crea una hoja de cálculo en Google Sheets llamada "Ideando Cantabria - Ideas"
 * 4. Copia el ID de la hoja (la parte de la URL entre /d/ y /edit)
 * 5. Pégalo en SPREADSHEET_ID abajo
 * 6. Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 7. Copia la URL del deployment y pégala en index.html (GOOGLE_SCRIPT_URL)
 */

// ⚠️ REEMPLAZA con el ID de tu Google Sheet
const SPREADSHEET_ID = 'TU_SPREADSHEET_ID_AQUI';
const SHEET_NAME = 'Ideas';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Crear hoja y headers si no existe
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Timestamp',
        'Nombre',
        'Email',
        'Título',
        'Categoría',
        'Descripción'
      ]);
      // Formato headers
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    // Añadir fila
    sheet.appendRow([
      new Date().toISOString(),
      data.nombre || '',
      data.email || '',
      data.titulo || '',
      data.categoria || '',
      data.descripcion || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', message: 'Idea registrada' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (run manually to verify setup)
function testDoPost() {
  const testEvent = {
    postData: {
      contents: JSON.stringify({
        nombre: 'Test Usuario',
        email: 'test@test.com',
        titulo: 'Idea de prueba',
        categoria: 'tecnologia',
        descripcion: 'Esta es una idea de prueba para verificar que el script funciona.'
      })
    }
  };

  const result = doPost(testEvent);
  Logger.log(result.getContent());
}
