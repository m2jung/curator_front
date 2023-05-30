import axios from 'axios'
import React, {useState} from 'react';

export default function TestApi() {
    const [data, setData] = useState(null);

    const onClickGetList = () => {
      axios.get('https://git.walpie.com/backtest/testList').then(response => {
        setData(response.data);
      });
    }

    const onClickGet = async () => {
      await axios.get('https://git.walpie.com/backtest/test', {
        params: {
            "value1": 8
        }
      })
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        console.log("error");
      });
    }

    const onClickPost = () => {
        axios.post('https://git.walpie.com/backtest/test', {
            "value2": "test3",
            "value3": "test3",                                                                                                                                                
            "value4": "test3",
            "value5": "test3",
            "value6": "test3",
            "value7": "test3",
            "value8": "test3",
            "value9": "test3"
          })
          .then(function (response) {
            setData(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    const onClickPut = () => {
        axios.put('https://git.walpie.com/backtest/test', {
            "value1": 6,
            "value2": "test3",
            "value3": "test3",                                                                                                                                                
            "value4": "test3",
            "value5": "test1",
            "value6": "test3",
            "value7": "test3",
            "value8": "test3",
            "value9": "test3"
          })
          .then(function (response) {
            setData(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    const onClickDelete = () => {
      axios.delete('https://git.walpie.com/backtest/test', {
        data: {
            "value1": 6
        }
      })
      .then(response => {
        setData(response.data);
      });
    }
    

    return (
        <div>
            <div>
                <div>
                <button onClick={onClickGetList}>getList</button><br />
                <button onClick={onClickGet}>get</button><br />
                <button onClick={onClickPost}>post</button><br />
                <button onClick={onClickPut}>put</button><br />
                <button onClick={onClickDelete}>delete</button>
                </div>
                {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
          </div>
        </div>
    )


}