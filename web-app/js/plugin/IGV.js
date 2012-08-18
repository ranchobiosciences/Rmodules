/*************************************************************************   
* Copyright 2008-2012 Janssen Research & Development, LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
******************************************************************/

function submitIGVJob(form)
{
	var selectedGenesIgv = document.getElementById("selectedGenesIgv").value;
	var igvChroms = 'ALL';// document.getElementById("igvChroms").value;
	var selectedSNPsIgv = document.getElementById("selectedSNPsIgv").value;
	
	if(selectedSNPsIgv == '' && selectedGenesIgv=='')
	{
		Ext.Msg.alert('Missing filter!', 'Please select at least one gene or SNP in the filter');
		return;
	}
	var formParams = {
						selectedGenes:selectedGenesIgv,
						chroms:igvChroms,
						selectedSNPs:selectedSNPsIgv
					};
	
	submitJob(formParams);
}
