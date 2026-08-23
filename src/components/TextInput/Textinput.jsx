

function TextInput ({type="Text", placeholder="Enter your value here ", onChangeHandler,label="Default"}) {
     return (
       <label>

    <span className="text-red-500  bg-color"> {label } </span>
       <input 
          type={type}
          placeholder={placeholder}
          className=" px-4 py-2 border border-amber-700 rounded-4xl w-full"
          onChange={onChangeHandler}
          
       />
       
       </label>
     )
}


export default TextInput;