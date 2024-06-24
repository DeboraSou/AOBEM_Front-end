import styles from './Triagem.module.css'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScrollTop from '../../../components/ScrollTop';
import axios from '../../../api/axios'
import toast, { Toaster } from 'react-hot-toast';

function Triage() {

    return (
        <>
            <ScrollTop />
            <h1 className={styles.triage_title}>Eu sou a Triage!</h1>
        </>
    )
}

export default Triage