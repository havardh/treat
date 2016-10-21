import React from 'react';
import { hashHistory } from 'react-router'

import { Button } from 'react-bootstrap'

export default class Calendar extends React.Component {

  openDay (day) {
    hashHistory.push(`day/${day}`)
  }

  render () {

    const month = [
      ["", "", "1", "2", "3", "4", "5"],
      ["6", "7", "8", "9", "10", "11", "12"],
      ["13", "14", "15", "16", "17", "18", "19"],
      ["20", "21", "22", "23", "24", "25", "26"],
      ["27", "28", "29", "30", "", "", ""],
    ];

    return (
      <div>
        <table>
          <tbody>
            {month.map((week, i) => (
              <tr key={i}>
                {week.map((day, i) => (
                  <td key={i}>
                    {day !== "" &&
                      <Button onClick={this.openDay.bind(null, day)}>
                        {day}
                      </Button>
                    }
                  </td>
                ))}
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
