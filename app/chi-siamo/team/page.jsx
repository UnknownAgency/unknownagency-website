"use client"

import { useState } from "react";

import FilterMember from "./filter-member";
import TeamMember from "./team-member";
import './team.css';

const teamMembers = [
    {
        name: 'Lorenzo Cavicchioli',
        subteam: 'Digital',
        position: 'Web Developer',
        image: 'https://digitalcanali.com/cep/team/fotoLorenzoCavicchioli.jpg',
        class: 'normal',
    },
    {
        name: 'Giuseppe Tramontana',
        subteam: 'Digital',
        position: 'Head of Digital',
        image: '',
        class: 'normal',
    },
    {
        name: 'Francesca Mattioli',
        subteam: 'Creativi',
        position: 'Digital Artist',
        image: '',
        class: 'normal',
    },
    {
        name: 'Simone Grassi',
        subteam: 'Creativi',
        position: 'Digital Artist',
        image: '',
        class: 'normal',
    },
    {
        name: 'Unisciti al nostro TEAM',
        subteam: 'Lavora con noi',
        position: '',
        image: 'https://digitalcanali.com/cep/team/logo-cep.png',
        lavoraconnoi: '/lavora-con-noi',
        class: 'lavora-con-noi',
    },
    {
        name: 'Ivo Colletta',
        subteam: 'Digital',
        position: 'F1 Pilot',
        image: '',
        class: 'normal',
    },
    {
        name: 'Caroglio Luca',
        subteam: 'Direzione',
        position: 'Direttore Generale',
        image: '',
        class: 'normal',
    },
    {
        name: 'Claudia Cavalli',
        subteam: 'Amminitrazione',
        position: 'Amministrazione',
        image: '',
        class: 'normal',
    },
    {
        name: 'Sofia Scano',
        subteam: 'Account',
        position: 'Direttore Generale',
        image: '',
        class: 'normal',
    },
    {
        name: 'Martina Nardone',
        subteam: 'Digital',
        position: 'Web Editor',
        image: '',
        class: 'normal',
    },
];

export default function Team() {

    const [currentFilter, setCurrentFilter] = useState("all");

    const handleFilterChanged = (filter) => {
        setCurrentFilter(filter);
    };    

    return(
        <main className="root-page page-team">
            <h1 className="title">Dream team</h1>
            <FilterMember onFilterChanged={handleFilterChanged} />
            <div className="wrap-team-members">
                {teamMembers
                    .filter((member) => currentFilter === "all" || member.subteam === currentFilter)
                    .map((member) => (
                        <TeamMember key={member.name} member={member} />
                    ))}
            </div>
        </main>
    )
}