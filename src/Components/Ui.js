import React, { useState } from 'react';
import ToDoList from '../ToDoLists';
// import Logo from '../Logo/Logo';
const Ui = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    const [editId, setEditId] = useState(-1);


    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listOfItems = () => {
        console.log(editId);
        if (editId > -1) {
            const newList = [...Items];
            newList[editId] = inputList;
            console.log(newList);
            setItems(newList);
            setEditId(-1);

        } else {
            if (inputList === "") { return; }
            setItems((oldItems) => {
                return [...oldItems, inputList];
            });
        }
        // console.log('Items', Items);
        setInputList("");
    };

    const deleteItems = (id) => {
        console.log("deleteItems");
        setItems((oldItems) => {
            return oldItems.filter((arrElm, index) => {
                return index !== id;
            })
        })
    };
    const editItem = (id) => {
        // console.log(editItem);
        setInputList(Items[id]);
        setEditId(id);

    }

    return (
        <div className="main_div">
            <div className="center_div">
                {/* <Logo></Logo> */}
                <br />
                <h1>MY TO-DO LIST</h1>
                <br />
                <input type='text' placeholder='Please Add Items'
                    onChange={itemEvent}
                    value={inputList} />
                <button type="button" onClick={listOfItems} >{editId > -1 ? 'UPD' : 'ADD'}</button>
                <ol>
                    {Items.map((itemval, index) => {
                        return <ToDoList key={index} id={index}
                            text={itemval} onDelete={deleteItems} onEdit={editItem} />
                    })}
                </ol>
            </div>
        </div>
    );
};

export default Ui;