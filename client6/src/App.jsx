import React, { useState } from "react"

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [editTodo, setEditTodo] = useState("")

  function addTodo() {
    if (!todo.trim()) return
    setTodos([...todos, todo])
    setTodo("")
  }

  function startEdit(index) {
    setEditIndex(index)
    setEditTodo(todos[index])
  }

  function saveEdit(index) {
    const updatedTodos = [...todos]
    updatedTodos[index] = editTodo
    setTodos(updatedTodos)
    setEditIndex(null)
    setEditTodo("")
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-black flex flex-col items-center pt-20 text-white">

    
      <h1 className="text-5xl font-extrabold tracking-widest mb-12
                     bg-clip-text text-transparent
                     bg-linear-to-r from-cyan-400 to-blue-500
                     drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
        TODO TASK
      </h1>

    
      <div className="flex gap-3 p-5 rounded-2xl
                      bg-white/10 backdrop-blur-lg
                      border border-white/20
                      shadow-[0_0_40px_rgba(56,189,248,0.3)]">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your task..."
          className="w-72 px-4 py-3 rounded-xl
                     bg-black/40 text-white
                     placeholder-gray-300
                     outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button
          onClick={addTodo}
          className="px-6 py-3 rounded-xl font-semibold
                     bg-linear-to-r from-cyan-400 to-blue-500
                     hover:scale-105 transition-all duration-200
                     shadow-lg shadow-cyan-500/30">
          ADD
        </button>
      </div>

    
      <div className="mt-12 w-400px space-y-4 ml-2">
        {todos.map((x, i) => (
          <div
            key={i}
            className="group flex items-center gap-3 p-4 rounded-2xl
                       bg-white/10 backdrop-blur-md
                       border border-white/20
                       hover:shadow-cyan-500/30
                       transition-all duration-300">

            <span className="text-cyan-400 font-bold">{i + 1}.</span>

            {editIndex === i ? (
              <input
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg
                           bg-black/40 text-white
                           outline-none focus:ring-2 focus:ring-cyan-400"
              />
            ) : (
              <p className="flex-1  mr-48">{x}</p>
            )}

            {editIndex === i ? (
              <button
                onClick={() => saveEdit(i)}
                className="px-3 py-1 rounded-lg text-sm
                           bg-green-500 hover:bg-green-600">
                Save
              </button>
            ) : (
              <>
                <button
                  onClick={() => startEdit(i)}
                  className="px-3 py-1 rounded-lg text-sm
                             bg-gray-400 hover:bg-blue-500 text-black">
                  Edit
                </button>

                <button
                  onClick={() => deleteTodo(i)}
                  className="px-3 py-1 rounded-lg text-sm
                             bg-red-500 hover:bg-red-600">
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
