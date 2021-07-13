import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/libs/AlurakutCommons';

//reutilizando nossa estrutura de componente
function ProfileSidbar(props){
  return(
    <Box>
       <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius:"8px"}}/>
    </Box>
  )
}


export default function Home() {
  const githubUser =  "Luann244";
  const pessooasFavoritas = [ 
    "Luann244",
    "eugenio-silva",   
    "Matheus",
    "ThiLourenco",
    "gabizinha12",
    "nunofranca"
    
   
  ]
  return (
    <>
      <AlurakutMenu />
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
     </div>

    <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
      <ProfileRelationsBoxWrapper>
         <h2 className="smallTitle"> Pessoas da Comunidades ({pessooasFavoritas.length}) </h2>
          <ul>
            {pessooasFavoritas.map((pessoas)=>{
              return(
                <li>
                  <a href={`/users/${pessoas}`} key={ pessoas}>
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
