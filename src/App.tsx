import './App.scss';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext, useGlobalContext } from './services/globalContext';
import translateInstant from './utilities/translateUtils';
import { getTodoData } from './services/ApiService';
import List from './components/List/List';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Search from './components/Search/Search';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import MaterialIcon from 'material-icons-react';

const App = () => {

  const [data, setData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
 
  const [todoName, setTodoName] = useState("");
  const [todoDone, setTodoDone] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getTodoData().then((res: any) => {
        setData(res.data.filter(ds => ds.userId === 1 && ds.id < 7));
    });
  }, []);


  const addItem = () => {
    data.push({
      userId: 1,
      id: data.length+1,
      completed: todoDone,
      title: todoName
    });
    setShowModal(false);
    setTodoName("");
    setTodoDone(false);
  } 

  
  const buttons: any[] = [];
  buttons.push(<div className="btn" onClick={() => addItem()}><MaterialIcon icon="add" size='medium'/></div>);

  return (
    <div className="App">
      <ContentWrapper style={{paddingTop: "4em"}}>
        <Header title={translateInstant("L_TITLE")} onAdd={() => setShowModal(true)} />
        <Search onChange={value => setSearchValue(value)} />
        <GlobalContext.Provider value={{listData: data, setData, searchValue}}>
          <List/>
        </GlobalContext.Provider>
      </ContentWrapper>
      { showModal ? <Modal title={translateInstant("L_ADD_TODO")} onClose={() => setShowModal(false)} buttons={buttons}>
        <div className="content-add-todo">
          <div className="float-label">
            <input type="text" name="Name" id="name" placeholder=" " onChange={e => setTodoName(e.target.value)} value={todoName}></input>
            <label>{translateInstant("L_TODO_NAME","TooDO Name")}</label>
          </div>
          <div className="flex flex-gap-5 flex-center margin-default width-fit">
            <span>{translateInstant("L_IS_DONE", "Erledigt:")}</span>
            <div className="checkBox">
                <input type="checkbox" name="donechbx" id="donechbx" className="list-item-state" onChange={() => setTodoDone(!todoDone)} checked={todoDone}/>
                <label></label>
            </div>
          </div>
        </div>
      </Modal> : null}
    </div>
  );
}

export default App;
