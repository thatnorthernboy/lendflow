export default function ProgressBar({value}:{value:number}){
  return (
    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
      <div className="h-full bg-greenbrand" style={{width:`${value}%`}} />
    </div>
  );
}
