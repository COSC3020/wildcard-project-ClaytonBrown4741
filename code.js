function randomMatrixGenerator(seedSize){
	var matrix=[]
	for (var i=0; i < seedSize; i++){
		matrix[i] = [];
                for (var j=0; j < seedSize; j++){
			if ( j == i){
				matrix[i][j]=0
			}
			else if (j+1==i)
				matrix[i][j]=1
			else{
                        	matrix[i][j]= Math.floor(Math.random() * seedSize);
				if (matrix[i][j] <= 0){
					matrix[i][j]=1
				}
			}
                }
        }
	return matrix
}
