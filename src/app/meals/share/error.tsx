"use client"
import  React, { ReactNode } from "react";


export default function Error():ReactNode{
    return (
        <React.Fragment>
            <h1>Ah error occurred!</h1>
            <p>Please try again later.</p>
        </React.Fragment>
    )
}