import React, { useState } from 'react'
interface fileExpo {
    id: string
    name: string
    isFolder: boolean
    items: Array<fileExpo>
}
type folderProp = {
    explorer: fileExpo
}

function Folder(props: folderProp) {
    const [expand, setExpand] = useState<boolean | undefined>()
    const { explorer } = props

    if (explorer.isFolder) {
        return (
            <>
                <div style={{ margin:'10px' }}>
                    <div className='folder' onClick={() => setExpand(!expand)}>
                        <span>{expand?<img src='/images/opened-folder.png' />:<img src='/images/folder.png' />} <span>{explorer.name}</span></span>
                    </div>
                    <div style={{ display: expand ? 'block' : 'none' }}>
                        {
                            explorer.items.map((itm) => <Folder explorer={itm} key={itm.id} />)
                        }
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <span className='file'>📄{explorer.name}</span>
        )
    }

}

export default Folder