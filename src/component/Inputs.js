import React,{useState, useRef} from "react";

function Inputs(){

    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    })

    const nameInput = useRef();
    const {name, nickname} = inputs

    const onChange = (e) => {

        const {name, value} = e.target;

        const updateObj = {...inputs, [name]: value}
        setInputs(updateObj)
    
        // => 
        // setInputs({
        //     ...inputs, // 기존의 input 객체를 복사한 뒤
        //     [name]: value // name 키를 가진 값을 value 로 설정
        //   });
    };

    const onReset = () =>{

        setInputs({
            name:'',
            nickname:''
        })
        nameInput.current.focus();
    }

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default Inputs;