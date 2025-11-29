 
 interface  buttonprops {
   
    text:string;
    bgcolor:string;
    variant:"primary"|"secondary"
 }
 
const variantstyles={
    primary:"p-2 m-2 text-4xl rounded",
    secondary:"p-4 m-4 text-8xl rounded-2xl"
}



 export const Button=(props:buttonprops)=>{
     return <button className={` ${variantstyles[props.variant]}  ${props.bgcolor}`} > {props.text} </button>
 }