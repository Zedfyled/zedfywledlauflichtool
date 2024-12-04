import { useEffect, useState } from "react"


function App() {

  const on = {"mainseg":0,"seg":[{"id":0,"grp":1,"spc":0,"of":0,"on":true,"frz":false,"bri":255,"cct":127,"set":0,"n":"","col":[[255,0,0],[0,0,0],[0,0,0]],"fx":98,"sx":128,"ix":100,"pal":0,"c1":128,"c2":128,"c3":16,"sel":true,"rev":false,"mi":false,"o1":false,"o2":false,"o3":false,"si":0,"m12":0}]};
  const off = {"mainseg":0,"seg":[{"id":0,"grp":1,"spc":0,"of":0,"on":true,"frz":false,"bri":255,"cct":127,"set":0,"n":"","col":[[255,0,0],[0,0,0],[0,0,0]],"fx":98,"sx":0,"ix":0,"pal":0,"c1":128,"c2":128,"c3":16,"sel":true,"rev":false,"mi":false,"o1":false,"o2":false,"o3":false,"si":0,"m12":0}]}
  let [speed, setSpeed] = useState<number>(128);
  let [onEffect, setOnEffect] = useState<any>({...on});
  let [offEffect, setOffEffect] = useState<any>({...off});

  useEffect(() => {
    setOnEffect({...on, seg: [{...on.seg[0], sx: speed}]});
    setOffEffect({...off, seg: [{...off.seg[0], sx: speed}]});
  }, [speed]);

  return (
    <div className="flex w-full lg:h-full  items-center justify-center ">
      <div className="mx-4  bg-white lg:mx-auto rounded shadow p-4 lg:h-auto relative">
        <div className="w-full flex flex-col text-center">
          <span className="font-medium text-xl py-2">WLED Percent Effekt - Geschwindigkeits Tool</span>
          <div>
            <div className="flex items-center justify-between">
              <span className="block w-full text-left">Langsam</span>
              <span>{speed}</span>
              <span className="block w-full text-right">Schnell</span>
            </div>
            <div className="w-full"><input type="range" className="w-full" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} min={0} max={255}/></div>
          </div>
          <div className="flex flex-row"> 

            <div className="w-1/2 pr-2">
              <span className="py-1 block font-medium">Lauflicht An - Anlaufen</span>
              <textarea className="border rounded w-full p-2 font-mono" rows={10} value={JSON.stringify(onEffect)} disabled></textarea>
              <button className="bg-blue-500 rounded py-2 px-4 text-white hover:bg-blue-600 focus:ring-4 shadow-lg transform active:scale-75 transition-transform mt-2" onClick={() => navigator.clipboard.writeText(JSON.stringify(onEffect))}>Kopieren</button>
            </div>

            <div className="w-1/2 pl-2">
              <span className="py-1 block font-medium">Lauflicht Aus - Auslaufen</span>
              <textarea className="border rounded w-full p-2 font-mono" rows={10} value={JSON.stringify(offEffect)} disabled></textarea>
              <button className="bg-blue-500 rounded py-2 px-4 text-white hover:bg-blue-600 focus:ring-4 shadow-lg transform active:scale-75 transition-transform mt-2 " onClick={() => navigator.clipboard.writeText(JSON.stringify(offEffect))}>Kopieren</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
