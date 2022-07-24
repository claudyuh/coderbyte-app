import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
const ForkList = props => {
  const [order, setOrder] = useState([])
  let forkData = props.forkDataList;
  const dataLength = Object.keys(forkData).length;
  // find index of first 3 max dates

  useEffect(() => {
    let maxPoints0 = "1987-12-15";
    let maxPoints1 = "1987-12-15";
    let maxPoints2 = "1987-12-15";
    let i0 = 0;
    let i1 = 0;
    let i2 = 0;
    if(dataLength>=3){
        for (let i = 0; i < dataLength; i++) {
            if (forkData[i].created_at > maxPoints0) {
            maxPoints0 = forkData[i].created_at;
            i0 = i;
            }
        }
        
        for (let i = 0; i < dataLength; i++) {
            if (forkData[i].created_at > maxPoints1 && forkData[i].created_at < maxPoints0) {
                maxPoints1 = forkData[i].created_at;
                i1 = i;
            }
        }
        
        for (let i = 0; i < dataLength; i++) {
            if (forkData[i].created_at > maxPoints2 && forkData[i].created_at < maxPoints1) {
            maxPoints2 = forkData[i].created_at;
            i2= i;
            }
        }
        setOrder([i0, i1, i2])

    }else if(dataLength === 2){
        if (forkData[0].created_at > forkData[1].created_at) {
            i0 = 0;
            i1 = 1;
            setOrder([0, 1])
        }else{
            i1 = 0
            i0 = 1;
            setOrder([1, 0])
        }
    }else{
        i0 = 0
        setOrder([i0])
    }
  }, [])
    

  return (
    <Row>
        {order && order.length ? order.map((item) => {
            return(
                <div className="d-flex my-3" key={item}>
                    <img src={forkData[item].owner.avatar_url} alt="avatar" className="forkUserImg"/>
                    <h5 className="m-3">{forkData[item].owner.login}</h5>
                </div>
            )
        })
        : null}
    </Row>
  );
};

export default ForkList;
