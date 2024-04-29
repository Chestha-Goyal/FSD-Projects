import { useState } from "react"

const NoteMaker = () => {
    const [notes, setNotes] = useState([]);
    const [activity, setActivity] = useState("");

    function add(){
        setNotes((notes) => {
            const dataList = [...notes, activity];
            setActivity("");
            return dataList;
        })
    }

    function remove(id){
        const updated = notes.filter((e,i) => {
            return id != i;
        })
        setNotes(updated);
    }

    function removeAll(){
        setNotes([]);
    }

    return (
        <>
        <div className="container">
            <div className="header">NOTES</div>
            <input type="text" placeholder="Type Here!!" value={activity} onChange={(e) => {setActivity(e.target.value)}}></input>
            <button onClick={add}>Add</button>
        </div>

        <div className="list">
            {notes != [] && notes.map((data, id) => {
                return (
                    <>
                    <p key={id}>
                        <div className="listData">
                            {data}
                            <button onClick={() => {remove(id)}}>DELETE</button>
                        </div>
                    </p>
                    </>
                )
            })}

            <div className="deleteAll">
                {notes.length > 0 && <button onClick={removeAll}>DELETE ALL</button>}
            </div>
        </div>
        </>
    )
}

export default NoteMaker;