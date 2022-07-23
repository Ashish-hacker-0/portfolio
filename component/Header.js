import React,{useState} from 'react'
import Styles from './Header.module.css'
import {BsDownload} from 'react-icons/bs';
import Link from 'next/link';
import {BsChevronCompactDown,BsChevronCompactRight} from 'react-icons/bs';

function Header({active,setActive}) {


  const [show,setShow ] = useState(false);

  return (
    <div className={Styles.container} >
        <div className={Styles.header}>
            <div>
                <img src="/a.png"/>
                <p>Ashish <br/> Kumar</p>
                {/* <ul>
                  {active==1&&<li><img src="https://images.squarespace-cdn.com/content/v1/5c42262e5ffd2010ac0aaafd/1580409344421-BQUG3XKDBF3097WBG8MV/no+go.png"/></li>}
                  {active==2&&<li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAvVBMVEWbWbYavJzznBIsPlAuzHE0mNvTVADAOSsWoIWORK3xxA80SV4nrmApgLnmfiLnTDyfYbmUT7EAnYuTRLL8xwAqSVfyxSA/Umb0oSI5SVk6zXc/nNs0smg2hrwAsWQAg8DwehvxRy3mgizmVEbVXRjDRDihU7Mu0Gc0lOLleCPUVgDIOSgUPlInsVcpfL8bhLrxTDkWSWA50W4AnI0AtFsAgMaZPrHwfRj6RykASVnmhSrwVUMoUmjWXxXLRDX2yXI/AAABdklEQVR4nO3QaTaCYQAG0BehkKFkJrMM9REyFPtflg308zlHh3uXcMtczrCWctNbjLkuObJkyZIlS5YsWbJkyZIlS5YsWbJkyZIlS5YsWbJkyZIlS5YsWbJkyZIlS5YsWbJkyZIlS9Y/zaodpAx7hzFlM6bUY1pHMf3BcUrV2IoJZtXXYvqDZko1asT8/ay2LFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZM18Vivm+STm5bWbUo3aMWU75zTm7Szm/aMTU1ZybtdjNmIen1ZjZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUvW72ft5JzHfF7EjCe7MWUv5zLm6yrmu7MfU+ZzlnKWY+4fFmJmM+tOlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJmuoHJkWBCyLfN68AAAAASUVORK5CYII="/></li>}
                  {active==3&&<li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/800px-Twemoji_1f600.svg.png"/></li>}
                  <li onClick={()=>setShow(!show)} ><img src="https://cdn-icons-png.flaticon.com/512/50/50621.png"/></li>
                </ul>
                {show&&<ul>
                  <li onClick={()=>setActive(1)} ><img src="https://images.squarespace-cdn.com/content/v1/5c42262e5ffd2010ac0aaafd/1580409344421-BQUG3XKDBF3097WBG8MV/no+go.png"/></li>
                  <li onClick={()=>setActive(2)} ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAvVBMVEWbWbYavJzznBIsPlAuzHE0mNvTVADAOSsWoIWORK3xxA80SV4nrmApgLnmfiLnTDyfYbmUT7EAnYuTRLL8xwAqSVfyxSA/Umb0oSI5SVk6zXc/nNs0smg2hrwAsWQAg8DwehvxRy3mgizmVEbVXRjDRDihU7Mu0Gc0lOLleCPUVgDIOSgUPlInsVcpfL8bhLrxTDkWSWA50W4AnI0AtFsAgMaZPrHwfRj6RykASVnmhSrwVUMoUmjWXxXLRDX2yXI/AAABdklEQVR4nO3QaTaCYQAG0BehkKFkJrMM9REyFPtflg308zlHh3uXcMtczrCWctNbjLkuObJkyZIlS5YsWbJkyZIlS5YsWbJkyZIlS5YsWbJkyZIlS5YsWbJkyZIlS5YsWbJkyZIlS9Y/zaodpAx7hzFlM6bUY1pHMf3BcUrV2IoJZtXXYvqDZko1asT8/ay2LFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZM18Vivm+STm5bWbUo3aMWU75zTm7Szm/aMTU1ZybtdjNmIen1ZjZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUvW72ft5JzHfF7EjCe7MWUv5zLm6yrmu7MfU+ZzlnKWY+4fFmJmM+tOlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJmuoHJkWBCyLfN68AAAAASUVORK5CYII="/></li>
                  <li onClick={()=>setActive(3)} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/800px-Twemoji_1f600.svg.png"/></li>
                </ul>} */}
            </div>
            <ul>
                <li><Link href={'#home'} >HOME</Link></li>
                <li><Link
                  activeClass="active"
                 href={'#about'}
                >ABOUT</Link></li>
                <li><Link href='#profile' scroll={true} >PROFILES</Link></li>
                <li><Link href='#portfolio' scroll={true} >PORTFOLIO</Link></li>
                <li><Link href={'#education'} scroll={true} >EDUCATION</Link></li>
                <li><Link href={'#skill'} >SKILLS</Link></li>
                <li><Link href={'#contact'} >CONTACT</Link></li>
           </ul>
           <button><a href='/Ashish Resume.pdf' download={'Ashish Resume.pdf'} >RESUME <BsDownload/></a> </button>
        </div>
     </div>
  )
}

export default Header