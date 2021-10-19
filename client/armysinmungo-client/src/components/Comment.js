import React from 'react';

const Comment = (props) => {

    const date = new Date(props.uploadTime);
    const uploadDate = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();


    return (
        <div style={{
            padding: '25px 0',
            border: '1px solid #dbdbdb',
            borderLeft: '0',
            borderRight: '0',
            overflow: 'hidden',
            borderBottom: '0',
            position: 'relative',
        }}>
            <div>
                <img src="/img/person.png" width="36px" height="36px"/>
                <span style={{
                    display: 'inline-block',
                    marginLeft: '10px',
                    fontSize: '19px',
                    verticalAlign: '-3px',
                    color: 'black'
                }}>{props.userName}</span>
                <span style={{
                    display: 'inline-block',
                    marginLeft: '10px',
                    fontSize: '19px',
                    verticalAlign: '-3px',
                    
                }}>{uploadDate}</span>
            </div>

            <div style={{
                fontSize: '19px',
                color: 'black',
                margin: '10px 0'                
            }}>
            {props.content}
            </div>
            
            <div>
                <span style={{
                    display: 'inline-block',
                    padding: '5px 17px',
                    border: '1px solid #cfcfcf',
                    borderRadius: '6px'
                }}>
                    <img src="/img/agree.png"/>
                   <span style={{
                       fontSize: '16px',
                       verticalAlign: '-2px',
                       display: 'inline-block',
                       marginLeft: '10px',
                   }}>{props.agreeNum}</span>
                </span>
                <span style={{
                    display: 'inline-block',
                    padding: '5px 17px',
                    border: '1px solid #cfcfcf',
                    borderRadius: '6px',
                    marginLeft: '10px'
                }}>
                    <img src="/img/disagree.png"/>
                   <span style={{
                       fontSize: '16px',
                       verticalAlign: '-2px',
                       display: 'inline-block',
                       marginLeft: '10px',
                   }}>{props.disagreeNum}</span>
                </span>
            </div>

        </div>
    )
};

export default Comment;