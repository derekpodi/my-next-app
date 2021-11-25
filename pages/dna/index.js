import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'


const DNA = () => {

    const submitDNA = async (event) => {
        event.preventDefault();
        
        const res = await fetch('/api/dna', {
            body: JSON.stringify({
              name: event.target.name.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          });
      
          const result = await res.json();
          // result.user => 'Ada Lovelace'
        }
    

    const submitContact = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const res = await fetch('/api/contact', {
            body: JSON.stringify({
            name: name,
            }),
            headers: {
            'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        const result = await res.json();
        alert(`Is this your full name: ${result.name}`);
    };

    return (
        <Layout DNA>
            <div> 
                <h1>API** Route Not Working Yet **</h1>
                <Link href="https://www.bioinformatics.org/sms/iupac.html">
                    <a>Nucleotide code dictionary </a>
                </Link>
                <h1>DNA Tool</h1>
                <br />
                <p>Paste your DNA sequence in and transform as it needed.</p>
                <p>Can clean up sequences by removing spaces/numbers or provide the results of complementary/reverse sequence transformations:</p>
                
                <div>
                    <div>
                        <div>Contact us</div>
                        <form onSubmit={submitContact}>
                            <label htmlFor='name'>Name</label>
                            <input id='name' name='name' type='text' autoComplete='name' required />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
                
                
                <table>
                    <tbody>
                        <tr>
                            <th>Input Sequence:</th>
                            <td>
                                <form name="form1" method="post" onSubmit={submitDNA}>
                                    <textarea name="text" rows="8" cols="50"></textarea>
                                    <input type="submit" name="action" value="Remove numbers and spaces"></input>
                                    <br></br>
                                    <select>
                                        <option value="complement">Complementary Sequence</option>
                                        <option value="reverse">Reverse Sequence</option>
                                        <option value="rev_comp">Reverse-Complementary Sequence</option>
                                    </select>
                                    &nbsp;&nbsp;&nbsp;
                                    <input type="submit" name="action" value="SUBMIT"></input>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <p></p>

                <table>
                    <tbody>
                        <tr>
                            <th>Your Results:</th>
                            <td>
                                <form name="form1" action="">
                                    <textarea name="text" rows="8" cols="50"></textarea>
                                    <br></br>
                                    <select>
                                        <option value="capitalize">Capitalize Result</option>
                                        <option value="lowercase">Lowercase Result</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
        
    );
}

export default DNA;