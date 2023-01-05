import React, {useState} from 'react'

function IndividualCheckBoxes({data, type, onMakeChange, onColorChange, onTransmissionChange}) {
const [checked, setChecked] = useState(false)

function handleChecked(){
if(checked){
    if(type === "make"){
        onMakeChange("remove", data)
    }
    else if(type === "color"){
        onColorChange("remove", data)
    }
    else if(type === "transmission"){
        onTransmissionChange("remove", data)
    }
}else{
    if(type === "make"){
        onMakeChange("add", data)
    }
    else if(type === "color"){
        onColorChange("add", data)
    }
    else if(type === "transmission"){
        onTransmissionChange("add", data)
    }
}
    setChecked(!checked)
}
  return (
    <div className="individual">
      <label>{data}
      <input type="checkbox" name={data} checked={checked} onChange={handleChecked} ></input>
      </label>
    </div>
  )
}

export default IndividualCheckBoxes