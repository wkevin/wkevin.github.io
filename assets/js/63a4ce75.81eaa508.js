"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[211],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=l,f=d["".concat(u,".").concat(c)]||d[c]||m[c]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={title:"\u66f4\u5b8c\u6574\u7684 Ubuntu \u7f51\u7edc\u5b89\u88c5\u56fe\u89e3\u7248",date:"2021-08-21 16:10:22 +0800",description:" ",authors:"wKevin",categories:["it"],tags:["ubuntu","netboot","uefi","legacy","bios"]},u=void 0,p={permalink:"/blog/2021/08/21/ubuntu.uefi.net.install",source:"@site/blog/2021-08-21-ubuntu.uefi.net.install/index.md",title:"\u66f4\u5b8c\u6574\u7684 Ubuntu \u7f51\u7edc\u5b89\u88c5\u56fe\u89e3\u7248",description:" ",date:"2021-08-21T16:10:22.000Z",formattedDate:"August 21, 2021",tags:[{label:"ubuntu",permalink:"/blog/tags/ubuntu"},{label:"netboot",permalink:"/blog/tags/netboot"},{label:"uefi",permalink:"/blog/tags/uefi"},{label:"legacy",permalink:"/blog/tags/legacy"},{label:"bios",permalink:"/blog/tags/bios"}],truncated:!0,authors:[{name:"wKevin",title:"Coder|Linuxer|Agiler|ZTEer",url:"http://wkevin.github.io/",imageURL:"/img/avastar/angry.bird-l.jpg",key:"wKevin"}],frontMatter:{title:"\u66f4\u5b8c\u6574\u7684 Ubuntu \u7f51\u7edc\u5b89\u88c5\u56fe\u89e3\u7248",date:"2021-08-21 16:10:22 +0800",description:" ",authors:"wKevin",categories:["it"],tags:["ubuntu","netboot","uefi","legacy","bios"]},prevItem:{title:"\u4ee4\u4eba\u5934\u75bc\u7684 git submodule",permalink:"/blog/2021/09/14/git.rm.cached.submodule"},nextItem:{title:"python\u3001go\u3001nodejs\u3001rust \u547d\u4ee4\u5bf9\u6bd4",permalink:"/blog/2021/05/19/py.go.js.ruby"}},s={authorsImageUrls:[void 0]},m=[{value:"\u6ce8 0",id:"\u6ce8-0",level:3},{value:"\u6ce8 1",id:"\u6ce8-1",level:3},{value:"\u6ce8 2",id:"\u6ce8-2",level:3},{value:"\u6ce8 3 - \u914d\u7f6e grub",id:"\u6ce8-3---\u914d\u7f6e-grub",level:3},{value:"\u6ce8 4",id:"\u6ce8-4",level:3},{value:"\u6ce8 5 - \u914d\u7f6e pxelinux.0",id:"\u6ce8-5---\u914d\u7f6e-pxelinux0",level:3},{value:"\u6ce8 6",id:"\u6ce8-6",level:3},{value:"\u6ce8 7",id:"\u6ce8-7",level:3}],d={toc:m};function c(e){var t=e.components,o=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u7528\u4e00\u53f0 Linux \u505a Server\uff0c\u901a\u8fc7\u4e00\u6839\u7f51\u7ebf\u4e3a\u53e6\u4e00\u53f0\u7535\u8111\uff08Client\uff09\u5b89\u88c5 Linux\uff08Ubunt\uff09\uff0c\u65f6\u5e8f\u56fe\u53ef\u4ee5\u5b8c\u6574\u7684\u5c55\u793a\u6bcf\u4e2a\u6b65\u9aa4\u64cd\u4f5c\u7684\u73af\u5883\u3001\u987a\u5e8f\u3001\u5173\u952e\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(65105).Z,width:"1217",height:"2862"})),(0,a.kt)("h3",{id:"\u6ce8-0"},"\u6ce8 0"),(0,a.kt)("p",null,"\u4e4b\u6240\u4ee5\u4f7f\u7528 /srv/tftp\uff0c\u56e0\u4e3a grub \u63a8\u8350 grub-mknetdir \u547d\u4ee4\u6765\u521b\u5efa\u7f51\u7edc\u542f\u52a8 grub\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"grub-mknetdir --net-directory=/srv/tftp --subdir=/boot/grub -d /usr/lib/grub/i386-pc\n")),(0,a.kt)("p",null,"\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/grub/manual/grub/grub.html#Network"},"8 Booting GRUB from the network")),(0,a.kt)("h3",{id:"\u6ce8-1"},"\u6ce8 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\ninterface=\\* # \u6709\u4e9b\u6587\u6863\u8bf4\u5199\u7f51\u5361\u540d\uff0c\u5982 enp4s0\uff0c\u4f46\u6709\u4e9b\u6587\u6863\u8bf4\u65e0\u6548\uff0c\u6211\u5b9e\u6d4b\u4e0d\u884c\nbind-interfaces\ndhcp-range=192.168.0.100,192.168.0.200,12h\n\n# BIOS(Legacy) \u65b9\u5f0f\u4ece pxelinux.0 \u5f00\u59cb\n\n# dhcp-boot=pxelinux.0\n\n# UEFI \u65b9\u5f0f\u4ece bootx64.efi klui\n\ndhcp-match=set:efi-x86_64,option:client-arch,7\ndhcp-boot=tag:efi-x86_64,bootx64.efi\n\n# \u4f7f\u80fd tftp\uff0c\u5e76\u914d\u7f6e\u6839\u8def\u5f84\n\nenable-tftp\ntftp-root=/srv/tftp\n\n")),(0,a.kt)("h3",{id:"\u6ce8-2"},"\u6ce8 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dpkg-deb --fsys-tarfile grub-efi-amd64-signed*deb | tar x ./usr/lib/grub/x86_64-efi-signed/grubnetx64.efi.signed -O > grubx64.efi\ndpkg-deb --fsys-tarfile shim-signed*deb | tar x ./usr/lib/shim/shimx64.efi.signed -O > bootx64.efi\ndpkg-deb --fsys-tarfile grub-common\\*deb | tar x ./usr/share/grub/unicode.pf2 -O > unicode.pf2\nsudo mv grubx64.efi bootx64.efi unicode.pf2 /srv/tftp/\n")),(0,a.kt)("h3",{id:"\u6ce8-3---\u914d\u7f6e-grub"},"\u6ce8 3 - \u914d\u7f6e grub"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/grub/manual/grub/"},"grub2 doc"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"16.3 The list of command-line and menu entry commands \u7ae0\u8282\u6709\u5b8c\u6574\u7684\u547d\u4ee4\u5217\u8868")))),(0,a.kt)("p",null,"\u914d\u7f6e\u4e2d\u6700\u5173\u952e\u7684\u662f\u8fd9\u51e0\u884c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"menuentry ... {\ngfxpayload=keep\nlinux /vmlinuz\ninitrd /initrd\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"menuentry \u662f\u83dc\u5355\u9009\u62e9"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u63a5\u53d7\u7684\u547d\u4ee4\u6709\u51e0\u5341\u4e2a\uff0c\u5305\u62ec:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gfxpayload=keep")," video mode\uff0c\u66ff\u4ee3\u4ee5\u524d 32 \u4f4d x86 \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"vga=...")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"linux kernel-image args...")," load kernel, args \u4f1a\u4f20\u9012\u7ed9 kernel")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6700\u4f73\u5b9e\u8df5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\nset default="0"\nset timeout=-1\n\nif loadfont unicode ; then\nset gfxmode=auto\nset locale_dir=$prefix/locale\nset lang=en_US\nfi\nterminal_output gfxterm\n\nset menu_color_normal=white/black\nset menu_color_highlight=black/light-gray\nif background_color 44,0,30; then\nclear\nfi\n\nfunction gfxmode {\nset gfxpayload="${1}"\n        if [ "${1}" = "keep" ]; then\nset vt_handoff=vt.handoff=7\nelse\nset vt_handoff=\nfi\n}\n\nset linux_gfx_mode=keep\n\nexport linux_gfx_mode\n\nmenuentry \'nfs by iso-casper kernel\' {\n        gfxmode $linux_gfx_mode\n        linux /ubuntu/20.04/casper/vmlinuz boot=casper only-ubiquity local-zh_CN splash audit=0 ip=dhcp netboot=nfs nfsroot=192.168.0.11:/var/lib/tftp/ubuntu/20.04 rw\n        initrd /ubuntu/20.04/casper/initrd\n}\nmenuentry \'http by netboot kernel\' {\n        gfxmode $linux_gfx_mode\n        linux /netboot/ubuntu-installer/amd64/linux\n        initrd /netboot/ubuntu-installer/amd64/initrd.gz\n}\n')),(0,a.kt)("h3",{id:"\u6ce8-4"},"\u6ce8 4"),(0,a.kt)("p",null,"Syslinux \u662f\u4e00\u4e2a Project\uff0c\u5305\u542b\u4ee5\u4e0b bootloader\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"SYSLINUX, for MS-DOS FAT filesystems"),(0,a.kt)("li",{parentName:"ol"},"PXELINUX, for network booting"),(0,a.kt)("li",{parentName:"ol"},'ISOLINUX, for bootable "El Torito" CD-ROMs'),(0,a.kt)("li",{parentName:"ol"},"EXTLINUX, for Linux ext2/ext3/ext4 or btrfs filesystems"),(0,a.kt)("li",{parentName:"ol"},"MEMDISK, for legacy operating systems (such as DOS) from nontraditional media")),(0,a.kt)("h3",{id:"\u6ce8-5---\u914d\u7f6e-pxelinux0"},"\u6ce8 5 - \u914d\u7f6e pxelinux.0"),(0,a.kt)("p",null,"\u8fd9\u91cc\u53ef\u4ee5\u63a7\u5236 pxelinux \u4ece\u591a\u4e2a\u5730\u65b9\u52a0\u8f7d\u5b89\u88c5\u5305\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6700\u4f73\u5b9e\u8df5\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4ece\u7f51\u7edc\u76f4\u63a5\u4e0b\u8f7d ISO"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DEFAULT install\nLABEL install\nKERNEL vmlinuz\nINITRD initrd\nAPPEND root=/dev/ram0 ramdisk_size=1500000 ip=dhcp url=http://...iso\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4ece nfs server \u4e0b\u8f7d"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f53 vmlinuz\uff08\u538b\u7f29\u7248\uff09\u3001initrd \u4ece ISO/casper \u4e2d\u63d0\u53d6\u65f6\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kernel ubuntu/18.04/casper/vmlinuz\nappend vga=788 boot=casper netboot=nfs nfsroot=192.168.1.10:/srv/tftp/ubuntu/18.04 initrd=ubuntu/18.04/casper/initrd --- quiet splash\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5f53 linux\uff08\u672a\u538b\u7f29\uff09\u3001initrd.gz\uff08\u538b\u7f29\uff09\u4ece ",(0,a.kt)("a",{parentName:"li",href:"http://mirrors.zte.com.cn/ubuntu/dists/%5Bxenial%7Cbionic%7Cfocal%5D/main/installer-%5Bamd64%7Ci386%5D/current/images/netboot/netboot.tar.gz"},"netboot")," \u4e2d\u63d0\u53d6\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kernel netboot/ubuntu-installer/amd64/linux\nappend vga=788 netboot=nfs nfsroot=192.168.1.10:/srv/tftp/ubuntu initrd=netboot/ubuntu-installer/amd64/initrd.gz --- quiet\n")),(0,a.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u8981\u65f6\u8bf7\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo ln -s /mnt/ /srv/tftp/ubuntu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"splash")," \uff1a\u8868\u793a loading \u5c4f\u5e55\u662f\u5426\u663e\u793a\uff0c\u7981\u7528\u7684\u8bdd loading \u65f6\u4e00\u7247\u7a7a\u767d")),(0,a.kt)("h3",{id:"\u6ce8-6"},"\u6ce8 6"),(0,a.kt)("p",null,"\u7531\u4e8e pxelinux \u5bf9\u6269\u5c55\u663e\u5361\u652f\u6301\u4e0d\u5b8c\u5907\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u96c6\u6210\u663e\u5361\uff0c\u6269\u5c55\u663e\u5361\u4f1a\u5f02\u5e38\u9ed1\u5c4f\u3001\u84dd\u5c4f\u3001\u7c89\u5c4f\u2026\u2026"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5c0f\u5c3a\u5bf8\u7684\u663e\u793a\u5668\uff0cpxelinux \u5927\u663e\u793a\u5668\u652f\u6301\u4e0d\u5b8c\u5907\uff08\u5b57\u4f53\u3001\u56fe\u6807\u8fc7\u5927\u2026\u2026\uff09")),(0,a.kt)("h3",{id:"\u6ce8-7"},"\u6ce8 7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5b8c\u6bd5\u540e\uff0c\u7f51\u5361\u4e0d\u80fd\u4f7f\u7528",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"NetworkManager \u4e2d\u627e\u4e0d\u5230\u7f51\u5361",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u539f\u56e0\uff1aNetworkManager \u6ca1\u6709\u4f7f\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u89e3\u51b3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo vi /tc/NetworkManager/NetworkManager.conf")," \u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"managed=true")," \u2014\u2014 \u4f7f\u80fd NM"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo service NetworkManager stop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo rm /var/lib/NetworkManager/NetworkManager.state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo service NetworkManager start"))))))))))}c.isMDXComponent=!0},65105:function(e,t,n){t.Z=n.p+"assets/images/net.install-6cb958f56f5d8d5ff8a1c2abd563c564.svg"}}]);