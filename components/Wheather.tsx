
export default function Weather() {
  return (
    <>
    <div className="p-4">
      {/* マウスオーバーするとサイズが大きくなるようにtransfromの設定を行います。四角がゆっくりと浮き上がってくるように見えるようにtransitionの設定も行います。 */}
      <div className="w-96 h-56 m-auto bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl shadow-2xl transform hover:scale-110 transition-transform duration-500 text-white relative">
        <div className="w-full px-8 absolute top-6">
          <div className="flex justify-between">
            <div>
              <p className="font-light">City Name</p>
              {/* tracking-widestは文字間隔 */}
              <p className="text-lg font-midium tracking-widest">Tokyo</p>
            </div>
            <div>pic</div>
          </div>
        </div>
      </div>
    </div>


    <div className="p-4">
  <div className="bg-gradient-to-r from-blue-500 to-blue-300
                  w-96 h-56 m-auto rounded-xl shadow-2xl 
                  transform hover:scale-110 transition-transform
                  text-white relative">           
    <div className="w-full px-8 absolute top-6">
      <div className="flex justify-between">
        <div>
          <p className="font-light">City Name</p>
          <p className="text-lg font-medium tracking-widest">
            Tokyo
          </p>
        </div>
        <div>
          画像
        </div>
      </div>
      <div className="pt-2">
        <p className="font-light">Weather Condition</p>
        <p className="text-lg font-medium tracking-widest">
          Cloudy
        </p>
      </div>
      <div className="pt-6 pr-6">
        <div className="flex justify-between">
          <div>
            <p className="font-light text-xs">
                Date
            </p>
            <p className="font-bold tracking-more-wider text-sm">
              2021-03-16
            </p>
          </div>
          <div>
            <p className="font-light text-xs">
              Temprature
            </p>
            <p className="font-bold tracking-more-wider text-sm">
              20°C
            </p>
          </div>
          <div>
            <p className="font-light text-xs">
              Humidity
            </p>
            <p className="font-bold tracking-more-wider text-sm">
              40%
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}