
var graph = require('@microsoft/microsoft-graph-client');

function getAuthenticatedClient(accessToken: string) {
  // Initialize Graph client
  const client = graph.Client.init({
    // Use the provided access token to authenticate
    // requests
    authProvider: (done: any) => {
      done(null, accessToken);
    }
  });
  return client;
}

export async function getUserDetails(accessToken: string) {
  const client = getAuthenticatedClient(accessToken);
  const user = await client
    .api('/me')
    .select('displayName,mailboxSettings,userPrincipalName')
    .get();    
  return user;
}

export async function postPush(accessToken: string, selectedRows: any) {  
  const client = getAuthenticatedClient(accessToken);  
  const result:any[] = [];
  for(let i = 0; i < selectedRows.length; i++) {
    let fila:any[] = [];
    let row = selectedRows[i];
    fila.push(row['Severity']);
    fila.push(row['Time']);
    fila.push(row['RecoveryTime']);
    fila.push(row['Status']);
    fila.push(row['Host']);
    fila.push(row['Problem']);
    fila.push(row['Duration']);
    fila.push(row['Ack']);
    fila.push(row['Actions']);
    fila.push(row['Tags']);

    result.push(fila);
  }
  /*
  const objeto = {"values": result };  
  const saveToGraph = await client
  //.api('/me/drive/items/5D9243B3565EB6D5!2373/workbook/tables/1/rows/add')
  .api('me/drives/5d9243b3565eb6d5/items/5D9243B3565EB6D5!2373/workbook/tables/1/rows/add')
  .post(objeto);*/
}
/*
export async function getUserWeekCalendar(accessToken: string, timeZone: string, startDate: Moment): Promise<Event[]> {
  const client = getAuthenticatedClient(accessToken);

  // Generate startDateTime and endDateTime query params
  // to display a 7-day window
  var startDateTime = startDate.format();
  var endDateTime = moment(startDate).add(7, 'day').format();

  // GET /me/calendarview?startDateTime=''&endDateTime=''
  // &$select=subject,organizer,start,end
  // &$orderby=start/dateTime
  // &$top=50
  var response: PageCollection = await client
    .api('/me/calendarview')
    .header('Prefer', `outlook.timezone="${timeZone}"`)
    .query({ startDateTime: startDateTime, endDateTime: endDateTime })
    .select('subject,organizer,start,end')
    .orderby('start/dateTime')
    .top(25)
    .get();

  if (response["@odata.nextLink"]) {
    // Presence of the nextLink property indicates more results are available
    // Use a page iterator to get all results
    var events: Event[] = [];

    // Must include the time zone header in page
    // requests too
    var options: GraphRequestOptions = {
      headers: { 'Prefer': `outlook.timezone="${timeZone}"` }
    };

    var pageIterator = new PageIterator(client, response, (event) => {
      events.push(event);
      return true;
    }, options);

    await pageIterator.iterate();

    return events;
  } else {
      return response.value;
  }*/
//}