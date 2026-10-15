// Uncompressed ZIP export: the uploaded image bytes are copied, never recompressed.
(() => {
 const encoder = new TextEncoder();
 function crc32(bytes){let crc=0xffffffff;for(const byte of bytes){crc^=byte;for(let i=0;i<8;i++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);}return (crc^0xffffffff)>>>0;}
 function header(size){const bytes=new Uint8Array(size);return {bytes,view:new DataView(bytes.buffer)};}
 function zip(files){
  const chunks=[],central=[];let offset=0;
  for(const file of files){
   const name=encoder.encode(file.name),bytes=typeof file.data==='string'?encoder.encode(file.data):file.data,crc=crc32(bytes);
   const h=header(30);h.view.setUint32(0,0x04034b50,true);h.view.setUint16(4,20,true);h.view.setUint16(6,0x0800,true);h.view.setUint16(12,0x0021,true);h.view.setUint32(14,crc,true);h.view.setUint32(18,bytes.length,true);h.view.setUint32(22,bytes.length,true);h.view.setUint16(26,name.length,true);
   chunks.push(h.bytes,name,bytes);
   const c=header(46);c.view.setUint32(0,0x02014b50,true);c.view.setUint16(4,20,true);c.view.setUint16(6,20,true);c.view.setUint16(8,0x0800,true);c.view.setUint16(14,0x0021,true);c.view.setUint32(16,crc,true);c.view.setUint32(20,bytes.length,true);c.view.setUint32(24,bytes.length,true);c.view.setUint16(28,name.length,true);c.view.setUint32(42,offset,true);
   central.push(c.bytes,name);offset+=30+name.length+bytes.length;
  }
  const centralSize=central.reduce((n,b)=>n+b.length,0),end=header(22);end.view.setUint32(0,0x06054b50,true);end.view.setUint16(8,files.length,true);end.view.setUint16(10,files.length,true);end.view.setUint32(12,centralSize,true);end.view.setUint32(16,offset,true);
  return new Blob([...chunks,...central,end.bytes],{type:'application/zip'});
 }
 window.ARAKETTIK_PACKAGE = data => {
  const copy=structuredClone(data),files=[];
  for(const o of [...copy.events,...copy.opportunities]){
   const value=o.imageData||o.photo?.path||'';
   const match=value.match(/^data:image\/(jpeg|png|webp);base64,(.+)$/);
   if(!match)continue;
   const file=`assets/manual/${o.id}.${match[1]==='jpeg'?'jpg':match[1]}`;
   const binary=atob(match[2]),bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));files.push({name:file,data:bytes});
   if(o.imageData)o.imageData=file;if(o.photo)o.photo.path=file;
  }
  files.unshift({name:'manual-content.js',data:'// Created by ARAKETTIK manual editor\nwindow.ARAKETTIK_MANUAL = '+JSON.stringify(copy,null,2)+';\n'});
  return zip(files);
 };
})();
