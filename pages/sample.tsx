import { client } from '../libs/client';
import type { Timerecorder } from '../types/timerecord';

type Props = {
  timerecords: Array<Timerecorder>;
};


export default function Sample({ timerecords }: Props) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        打刻
      </h1>

      {timerecords.map(timerecord => (
        <div key={timerecord.id} className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                氏名
              </span>
              <div className="px-6 py-4">
                {timerecord.name}
              </div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                社員番号
              </span>
            <div className="px-6 py-4">{timerecord.employeeNumber}</div>
          </div>
        </div>
        <p>出勤時間　{timerecord.inTime}</p>
        <p>退勤時間　{timerecord.outTime}</p>

      </div>
        ))}
    </>
  )
}


export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'timerecorder' });

  return {
    props: {
      timerecords: data.contents,
    },
  };
};