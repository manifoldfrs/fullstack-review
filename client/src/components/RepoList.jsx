import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    The Top {props.repos.length} Repos
    <table cellSpacing='10'>
      	<tbody>
	      	<tr>
            <th>Owner</th>
            <th>Repo</th>
	        	<th>Link</th>
            <th>Stars</th>
            <th>Forks</th>
	        </tr>
        	{props.repos.map(repo => <RepoListEntry repo={repo}/>)}
        </tbody>
      </table>
  </div>
)

export default RepoList;