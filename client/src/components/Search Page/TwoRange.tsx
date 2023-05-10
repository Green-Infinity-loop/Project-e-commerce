export default function Tworange() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div
          x-data="range()"
          x-init="mintrigger(); maxtrigger()"
          className="relative max-w-xl w-full">
          <div>
            <input
              type="range"
              step="100"
              x-bind:min="min"
              x-bind:max="max"
              x-on:input="mintrigger"
              x-model="minprice"
              className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
            />

            <input
              type="range"
              step="100"
              x-bind:min="min"
              x-bind:max="max"
              x-on:input="maxtrigger"
              x-model="maxprice"
              className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
            />

            <div className="relative z-10 h-2">
              <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

              <div
                className="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
                x-bind:style="'right:'+maxthumb+'%; left:'+minthumb+'%'"></div>

              <div
                className="absolute z-30 w-6 h-6 top-0 left-0 bg-green-300 rounded-full -mt-2 -ml-1"
                x-bind:style="'left: '+minthumb+'%'"></div>

              <div
                className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-300 rounded-full -mt-2 -mr-3"
                x-bind:style="'right: '+maxthumb+'%'"></div>
            </div>
          </div>

          <div className="flex justify-between items-center py-5">
            <input
              type="text"
              max-h-5
              x-on:input="mintrigger"
              x-model="minprice"
              className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
            <input
              type="text"
              max-h-5
              x-on:input="maxtrigger"
              x-model="maxprice"
              className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
        </div>

        {/* function range() {
        return (
          minprice: 1000, 
          maxprice: 7000,
          min: 100, 
          max: 10000,
          minthumb: 0,
          maxthumb: 0, 
          
          mintrigger() {   
            this.minprice = Math.min(this.minprice, this.maxprice - 500);      
            this.minthumb = ((this.minprice - this.min) / (this.max - this.min)) * 100;
          },
           
          maxtrigger() {
            this.maxprice = Math.max(this.maxprice, this.minprice + 500); 
            this.maxthumb = 100 - (((this.maxprice - this.min) / (this.max - this.min)) * 100);    
          }, 
        )
    } */}
      </div>
    </>
  );
}
