import { useEffect, useState } from "react"
import { getClasses } from "../../service/Service"
import { ClassroomAppBar } from "../AppBar"
import { ClassroomList } from "../ClassroomList"

export const Home = () => {
    const[classes, setClasses]=useState([])

    const onClassroomCreate = (classroom) =>{
        setClasses([
            ...classes,
            classroom
        ])
    }

    useEffect(()=>{
        (async()=>{
            setClasses((await getClasses()).data)
        })()
    },[])

    return (
        <>
        <ClassroomAppBar onCreate={onClassroomCreate}/>
        <ClassroomList classrooms={classes} />
        </>
    )
}