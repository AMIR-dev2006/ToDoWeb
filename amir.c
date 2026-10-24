#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>

#include <stdio.h>
int main (){
int pid ;
pid=fork();
if(pid ==0){
	for(;;) printf("Je suis le père\n");

}else{
      	for(;;) printf("Je suis le fils\n");
 }
 }





