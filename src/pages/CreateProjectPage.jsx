function CreateProjectPage() {
    return (
        <div className="CreateProjectPage">
            <h3>Add Project</h3>

            <form>
                <input type="text" name="title" placeholder="enter the title" />

                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateProjectPage