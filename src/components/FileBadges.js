import '../styles/Badges.css'
const FileBadges = (props) => {
    const extension = props.filename.split('.').pop()
    const extensionFinal = '.'+ extension
    return (
        <span className={extension} style={{"marginLeft": "10px"}}>
            {props.language}
        </span>
    )
}

export default FileBadges;