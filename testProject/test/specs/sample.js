describe('Sample', () => {

    it('Find and click Media Button using accessibility ID', async () => {
        // find element by accessibility id
        console.log('Searching for Media button');
        const mediaButton = await $('~Media');

        // click on element
        console.log('Clicking Media button');
        await mediaButton.click();
    
        // assertion wating for AudioFx button to be visible
        console.log('Waiting for AudioFx button to be visible');
        const audioFxButton = await $('~AudioFx');
        await expect(audioFxButton).toBeExisting();
    })

})