function Card(props){
    return (
        <>
        
        <div id="car" className="w-[20rem] h-[14rem]  rounded-2xl mb-[30px]" style={{backgroundColor:"#d9d2c3"}}>
        <img className="w-[65px] h-[60px] translate-y-[-25px] translate-x-3" src={"/photoes/" + props.ig + ".png"} alt="" />
        <p className="text-slate-400  translate-x-5 font-semibold pt-[10px]">{props.aa} </p>
        <p className="text-lg font-bold translate-x-5 pt-[5px]">{props.bb}</p>
        <p className="text-slate-400 translate-x-5 font-semibold pt-[5px] pb-[25px]">{props.cc}</p>
        <p className="text-purple-700 translate-x-5 font-semibold">{props.dd}</p>
        </div>

        </>
    )
}
export default Card