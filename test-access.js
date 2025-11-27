const https = require('https');
const http = require('http');

// Test function to check if staging environment is accessible
async function testStagingAccess() {
    const stagingUrl = 'https://accounts.staging.cartpanda.com/login';
    
    console.log('🔍 Testing access to staging environment...');
    console.log(`URL: ${stagingUrl}`);
    
    return new Promise((resolve, reject) => {
        const url = new URL(stagingUrl);
        const options = {
            hostname: url.hostname,
            port: url.port || 443,
            path: url.pathname,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1'
            },
            timeout: 10000
        };
        
        const req = https.request(options, (res) => {
            console.log(`Status Code: ${res.statusCode}`);
            console.log(`Headers:`, res.headers);
            
            if (res.statusCode === 403) {
                console.log('❌ 403 Forbidden - Access denied');
                console.log('Possible solutions:');
                console.log('1. Check if your IP is whitelisted');
                console.log('2. Use VPN if required');
                console.log('3. Contact admin for access');
                reject(new Error('403 Forbidden'));
            } else if (res.statusCode === 200) {
                console.log('✅ Access successful');
                resolve(true);
            } else {
                console.log(`⚠️  Unexpected status code: ${res.statusCode}`);
                resolve(false);
            }
        });
        
        req.on('error', (error) => {
            console.error('❌ Network error:', error.message);
            reject(error);
        });
        
        req.on('timeout', () => {
            console.error('❌ Request timeout');
            req.destroy();
            reject(new Error('Request timeout'));
        });
        
        req.end();
    });
}

// Run the test
testStagingAccess()
    .then(() => {
        console.log('🎉 Staging environment is accessible!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('💥 Staging environment access failed:', error.message);
        process.exit(1);
    }); 