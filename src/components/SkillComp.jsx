const SkillComp = (props) => {
    const {details} = props
    const {name, url} = details

    return (
        <div className="w-[80px] p-3 flex flex-col m-auto border-0">
            <img src={url}  className="w-[50px] m-auto" />
            <p className="text-center text-base text-sm text-white" >{name}</p>
        </div>
    )
}

export default SkillComp