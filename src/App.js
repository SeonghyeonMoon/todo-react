import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert />
        <TodoList/>
      </TodoTemplate>
    </div>
  );
}

export default App;
