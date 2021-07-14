import React , { useState } from 'react';
import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/libs/AlurakutCommons';

//reutilizando nossa estrutura de componente
function ProfileSidbar(props){
  return(
    <Box>
       <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius:"8px"}}/>
       <hr />
      <p>
          <a className="boxLink" href={`https://github.com/${props.githubUser}`}>@{props.githubUser}</a>
      </p>
       <hr />

       <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}


export default function Home() {
  const [ community, setHandleCommunity ] = useState([{
    id:"14-10-2021",
    title: "Eu odeio acorde cedo rs..",
    image: "https://alurakut.vercel.app/capa-comunidade-01.jpg"
  }]);
  const githubUser =  "Luann244";
  //const community = ["AluraKut2021"];
  const pessooasFavoritas = [ 
    "Luann244",
    "eugenio-silva",   
    "Matheus",
    "ThiLourenco",
    "gabizinha12",
    "nunofranca",
  ];
  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
       <MainGrid>
     
     <div className="profileArea" style={{ gridArea: "profileArea"}}>
        <ProfileSidbar githubUser={githubUser}/>
     </div>

     <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
      <Box>
          <h1 className="title">
            Bem Vindo (a)
          </h1>
          <OrkutNostalgicIconSet />
      </Box>
      <Box>
          <h2 className="subTitle">Oque você desejar fazer ?</h2>
          <form onSubmit={ function handleCreateCommunity(e){
            e.preventDefault();
            //mando nossa funcao FormData() pega o valor do input 
            const dateforms = new FormData(e.target);
            console.log("campos", dateforms.get("title"));
            console.log("campos", dateforms.get("image"));
            const Createdcommunity = {
              id: new Date().toISOString(),
              title: dateforms.get("title"),
              image: dateforms.get("image")
            };
           const communityUpdated = [...community, Createdcommunity];
            setHandleCommunity(communityUpdated);
          }}>
            <div>
              <input 
                type="text"
                placeholder="Qual vai ser o nome da sua Comunidade?"
                name="title"
                arial-label="Qual vai ser o node da sua Comunidade?"
              />
            </div>
            <div>
              <input 
                type="text"
                placeholder="Coloque uma URL para usarmos na capa"
                name="image"
                arial-label="Coloque uma URL para usarmos na capa"
              />
            </div>

            <button>
              Criar Comunidade
            </button>
          </form>
      </Box>
     </div>

    <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
      <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle"> Comunidades ({community.length}) </h2>
        <ul>
              {community.map((pessoas)=>{
                return(
                  <li key={ pessoas.id}>
                    <a href={`/users/${pessoas.title}`}>
                      <img src={pessoas.image} />
                        <span>{pessoas.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
      </ProfileRelationsBoxWrapper>
      <ProfileRelationsBoxWrapper>
         <h2 className="smallTitle"> Pessoas da Comunidades ({pessooasFavoritas.length}) </h2>
          <ul>
            {pessooasFavoritas.map((pessoas)=>{
              return(
                <li key={ pessoas}>
                  <a href={`/users/${pessoas}`}>
                    <img src={`https://github.com/${pessoas}.png`} />
                      <span>{pessoas}</span>
                  </a>
                </li>
              )
            })}
          </ul>
      </ProfileRelationsBoxWrapper>

    </div>
    </MainGrid>
    </>
  )
}
