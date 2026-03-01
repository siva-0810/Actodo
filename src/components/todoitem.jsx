function Todoitem(props){
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    function handleDelete(deleteid)
    {
        var temparr = activityArr.filter(function(item){
            if (item.id == deleteid)
                return false;
            else
                return true;
        
        })
        setActivityArr(temparr);
    }
    return(
        <div className="flex justify-between color ">
         <p>{props.index+1}. {props.activity}</p>
         <button className="text-red-600" onClick={function(){handleDelete(props.id)}}>Delete</button>
         </div>
    )
}
export default Todoitem;
