import React from 'react'
import Header from './components/Header.js'
import ToDoList from './components/ToDoList.js'

export default function () {

    const todos=[{
      "id": 1,
      "title": "Universal zero defect open architecture",
      "description": "Object-based bandwidth-monitored architecture",
      "done": false,
      "category": "even-keeled",
      "date": "07/23/2021"
    }, {
      "id": 2,
      "title": "Re-contextualized analyzing adapter",
      "description": "Vision-oriented well-modulated process improvement",
      "done": false,
      "category": "mission-critical",
      "date": "09/23/2021"
    }, {
      "id": 3,
      "title": "Ameliorated system-worthy leverage",
      "description": "Open-source leading edge database",
      "done": false,
      "category": "Up-sized",
      "date": "11/27/2021"
    }, {
      "id": 4,
      "title": "Ergonomic actuating software",
      "description": "Focused dedicated leverage",
      "done": true,
      "category": "Graphic Interface",
      "date": "02/22/2022"
    }, {
      "id": 5,
      "title": "Future-proofed motivating instruction set",
      "description": "Team-oriented scalable architecture",
      "done": true,
      "category": "forecast",
      "date": "05/31/2022"
    }, {
      "id": 6,
      "title": "Customer-focused zero administration firmware",
      "description": "Focused multi-tasking utilisation",
      "done": true,
      "category": "complexity",
      "date": "03/15/2022"
    }, {
      "id": 7,
      "title": "User-centric well-modulated strategy",
      "description": "Extended bottom-line Graphic Interface",
      "done": false,
      "category": "ability",
      "date": "05/31/2022"
    }, {
      "id": 8,
      "title": "Multi-lateral 24 hour intranet",
      "description": "Fully-configurable static definition",
      "done": true,
      "category": "Pre-emptive",
      "date": "12/22/2021"
    }, {
      "id": 9,
      "title": "Sharable zero administration core",
      "description": "Public-key executive implementation",
      "done": false,
      "category": "Business-focused",
      "date": "02/16/2022"
    }, {
      "id": 10,
      "title": "Programmable foreground pricing structure",
      "description": "Self-enabling motivating forecast",
      "done": true,
      "category": "secured line",
      "date": "07/17/2021"
    }, {
      "id": 11,
      "title": "Progressive optimal info-mediaries",
      "description": "Organic even-keeled task-force",
      "done": false,
      "category": "implementation",
      "date": "03/11/2022"
    }, {
      "id": 12,
      "title": "Managed motivating contingency",
      "description": "Organized reciprocal leverage",
      "done": true,
      "category": "local area network",
      "date": "06/10/2022"
    }, {
      "id": 13,
      "title": "Ergonomic mission-critical interface",
      "description": "Up-sized systematic focus group",
      "done": true,
      "category": "24 hour",
      "date": "05/11/2022"
    }, {
      "id": 14,
      "title": "Robust zero administration moderator",
      "description": "Reactive local intranet",
      "done": false,
      "category": "hardware",
      "date": "10/12/2021"
    }, {
      "id": 15,
      "title": "Customizable zero administration concept",
      "description": "Face to face multi-state function",
      "done": true,
      "category": "Innovative",
      "date": "01/31/2022"
    }, {
      "id": 16,
      "title": "Universal context-sensitive superstructure",
      "description": "Centralized optimal utilisation",
      "done": true,
      "category": "24/7",
      "date": "12/01/2021"
    }, {
      "id": 17,
      "title": "Distributed static encoding",
      "description": "Organized upward-trending archive",
      "done": false,
      "category": "concept",
      "date": "01/04/2022"
    }, {
      "id": 18,
      "title": "Upgradable human-resource middleware",
      "description": "Multi-tiered impactful help-desk",
      "done": true,
      "category": "bifurcated",
      "date": "11/16/2021"
    }, {
      "id": 19,
      "title": "Persevering static capacity",
      "description": "Future-proofed multi-state leverage",
      "done": true,
      "category": "portal",
      "date": "10/20/2021"
    }, {
      "id": 20,
      "title": "Enterprise-wide mobile migration",
      "description": "Fully-configurable well-modulated instruction set",
      "done": true,
      "category": "encompassing",
      "date": "04/06/2022"
    }, {
      "id": 21,
      "title": "Diverse grid-enabled time-frame",
      "description": "Cloned maximized productivity",
      "done": false,
      "category": "Assimilated",
      "date": "05/15/2022"
    }, {
      "id": 22,
      "title": "Pre-emptive asynchronous toolset",
      "description": "Front-line upward-trending adapter",
      "done": false,
      "category": "Inverse",
      "date": "08/19/2021"
    }, {
      "id": 23,
      "title": "Upgradable well-modulated algorithm",
      "description": "Mandatory bottom-line access",
      "done": false,
      "category": "asymmetric",
      "date": "08/18/2021"
    }, {
      "id": 24,
      "title": "Assimilated well-modulated middleware",
      "description": "Integrated responsive software",
      "done": false,
      "category": "Up-sized",
      "date": "03/26/2022"
    }, {
      "id": 25,
      "title": "De-engineered foreground infrastructure",
      "description": "Persevering system-worthy throughput",
      "done": true,
      "category": "Extended",
      "date": "02/20/2022"
    }]
    

  return (
    <div>
   <Header/>
   <ToDoList todos={todos}/>

   </div>
  )
}
