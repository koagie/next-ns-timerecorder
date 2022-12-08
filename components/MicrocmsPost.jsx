import { client } from '../libs/client';

export function microcmsPost() {
  client.create({endpoint: 'timerecorder', content: JSON.parse('{"employeeNumber":123,"name":"TEST008","inTime":"2022-11-29T04:26:28.373Z","outTime":"2022-11-29T04:26:28.373Z","breakTime":"2022-11-29T04:26:28.373Z","inTime2":"2022-11-29T04:26:28.373Z","outTime2":"2022-11-29T04:26:28.373Z","breakTime2":"2022-11-29T04:26:28.373Z","comment":"複数行のテキストを入力複数行のテキストを入力","temperature":123}'),})
  .then((res) =>
  console.log(res.id))
  .end;
}
