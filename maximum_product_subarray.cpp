#include<bits/stdc++.h>
using namespace std;
class Solution{
public:

	// Function to find maximum product subarray
	long long maxProduct(vector<int> arr, int n) {
	    
	    long long int max1=INT_MIN;
         long long int  mul;
         long long int k;
        for(int i=0;i<n;i++){
             k=arr[i];
            mul=arr[i];
            for(int j=i+1;j<n;j++){
                mul*=arr[j];
                max1=max(max1,max(k,mul));
            }
        }
        return (max1==INT_MIN?mul:max(max1,k)); 
	 }
};
int main(){




return 0;
}