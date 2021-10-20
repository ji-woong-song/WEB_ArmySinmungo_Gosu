import React, { useState, useEffect } from 'react';

const PostCard = (props) => {
    
    const date = new Date(props.uploadTime);
    const uploadDate = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();

    return (
        <div className="col-md-3" style={{
            padding: '15px',
        }}>
            <a href={`/${props.type}-post?id=${props.id}`} style={{
                color: 'black'
            }}>
            <div className="" style={{
                border: '1px solid #63b99c',
                padding: '20px',
            }}>
                <div style={{
                    marginBottom: '10px',
                }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '5px 7px',
                        fontSize: '15px',
                        border: '1px solid #c6c6c6',
                        borderRadius: '4px'
                    }}>{props.category}</span>
                    
                    <span style={{
                        display: 'inline-block',
                        padding: '5px 7px',
                        fontSize: '15px',
                        borderRadius: '4px',
                        color: 'white',
                        backgroundColor: '#219b72',
                        marginLeft: '4px',
                        border: '1px solid #219b72'
                    }}>{props.tagged}</span>
                </div>

                <div style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    height: '50px',
                    color: 'black',
                    marginBottom: '20px',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebKitBoxOrient: 'vertical',
                    'display': '-webkit-box',
                    '-webkit-line-clamp': '2',
                    '-webkit-box-orient': 'vertical'
                }}>
                {props.title}
                </div>

                <div style={{
                    fontSize: '16px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    height: '45px',
                    marginBottom: '20px',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebKitBoxOrient: 'vertical',
                    'display': '-webkit-box',
                    '-webkit-line-clamp': '2',
                    '-webkit-box-orient': 'vertical'
                }}>
                    {props.content}
                </div>

                <div style={{
                    fontSize: '16px',
                    color: 'black',
                }}>{props.userName}</div>

                <div style={{
                    fontSize: '16px',
                    color: 'black',
                    marginBottom: '10px'
                }}>{uploadDate}</div>

                <div style={{
                    paddingTop: '10px',
                    borderTop: '1px solid #707070'
                }}>
                    <span style={{
                        display: 'inline-block',
                        marginRight: '10px'
                    }}><strong>공감</strong> : {props.agreeNum}</span>
                    {/* <span><strong>댓글</strong> : 6</span> */}
                </div>

            </div>
            </a>
        </div>
        
    )
}

export default PostCard;