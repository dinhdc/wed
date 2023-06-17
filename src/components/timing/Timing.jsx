import CountdownTimer from "./CountdownTimer.jsx";

const Timing = () => {

    const dateWedding = new Date(2023, 6, 24, 0, 0, 0);
    const dateCurrent = new Date();
    const differenceInSeconds = Math.floor((dateWedding - dateCurrent) / 1000);

    return <section className="invitation-section section-padding section-bg-img">
        <div className="container">
            <div className="row" >
                <div className="col col-md-offset-3 col-md-6">
                    <div className="invitation-box calendar-box" style={{ height: "583px" }}>
                        <div className="left-vec"></div>
                        <div className="right-vec"></div>
                        <div className="inner">
                            <div className="mini_calendar">
                                <table>
                                    <caption className="calendar-month">Tháng 6 / 2023</caption>
                                    <tbody>
                                        <tr>
                                            <th abbr="Sunday">Sun</th>
                                            <th abbr="Monday">Mon</th>
                                            <th abbr="Tuesday">Tue</th>
                                            <th abbr="Wednesday">Wed</th>
                                            <th abbr="Thursday">Thu</th>
                                            <th abbr="Friday">Fri</th>
                                            <th abbr="Saturday">Sat</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>1
                                            </td>
                                            <td>2</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                        </tr>
                                        <tr>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                            <td>23</td>
                                            <td><div id="today">24</div></td>
                                        </tr>
                                        <tr>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                            <td>30</td>
                                            <td id="emptydays" colSpan="1">&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <CountdownTimer seconds={differenceInSeconds} />
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Timing;