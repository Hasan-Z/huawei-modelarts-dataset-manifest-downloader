const test=require('node:test');const assert=require('node:assert/strict');
const BASE="https://console-intl.huaweicloud.com/modelartsstudio";
const workspacePath=p=>`${BASE}/rest/v1/${encodeURIComponent(p)}/workspaces?offset=0&limit=5000`;
const datasetPath=(p,w)=>{const q=new URLSearchParams({limit:"5000",offset:"0",sort_by:"create_time",sort_type:"DESC",status:"ONLINE",mine:"false",catalog:"PUBLISH",show_deleted:"false"});return `${BASE}/rest/v1/${encodeURIComponent(p)}/workspaces/${encodeURIComponent(w)}/data-management/datasets?${q}`};
const downloadPath=(p,w,d)=>`${BASE}/rest/v1/${encodeURIComponent(p)}/workspaces/${encodeURIComponent(w)}/data-management/dataset/${encodeURIComponent(d)}/download-file?file_path=data.manifest`;
test('workspace URL',()=>assert.equal(workspacePath('bee5330ceda1465b84f035c1c0e745f3'),`${BASE}/rest/v1/bee5330ceda1465b84f035c1c0e745f3/workspaces?offset=0&limit=5000`));
test('dataset URL has filters',()=>{const u=datasetPath('p','w');assert.match(u,/status=ONLINE/);assert.match(u,/catalog=PUBLISH/);assert.match(u,/show_deleted=false/)});
test('download URL',()=>assert.equal(downloadPath('bee5330ceda1465b84f035c1c0e745f3','6cf34a52-6856-4ee1-841b-f6153789f65f','1527705695296819200'),`${BASE}/rest/v1/bee5330ceda1465b84f035c1c0e745f3/workspaces/6cf34a52-6856-4ee1-841b-f6153789f65f/data-management/dataset/1527705695296819200/download-file?file_path=data.manifest`));
test('dataset_id is used as selector value',()=>assert.equal([{dataset_id:'123'}][0].dataset_id,'123'));
